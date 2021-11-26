const fs = require('fs')
const path = require('path')
const config = require('./site.config.json')

const pagesToIgnore = [
  '/dev-404-page/',
  '/404/',
  '/404.html',
  '/offline-plugin-app-shell-fallback/'
]

const isProduction = () => process.env.CIRCLECI === 'true' && process.env.CIRCLE_BRANCH === 'master'
const siteMap = []

// Create localised page for each page
module.exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (pagesToIgnore.includes(page.path)) return Promise.resolve()

  return new Promise(resolve => {
    Object.keys(config.availableLanguages).forEach(lang => {
      const path = `/${lang}${page.path}`
      createPage({
        ...page,
        path
      })

      siteMap.push(path)
    })

    resolve()
  })
}

module.exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
  if (stage === 'build-javascript' && isProduction()) {
    // Disable source maps on production
    actions.setWebpackConfig({ devtool: false })
  }

  // https://github.com/gatsbyjs/gatsby/issues/7003#issuecomment-426739031
  if (stage === 'build-javascript') {
    const config = getConfig()
    const app = typeof config.entry.app === 'string'
      ? [ config.entry.app ]
      : config.entry.app

    config.entry.app = [ '@babel/polyfill', ...app ]
    actions.replaceWebpackConfig(config)
  }
}

module.exports.onPostBuild = () => {
  if (!isProduction()) return Promise.resolve()
  const domain = fs.readFileSync(path.join(__dirname, 'static/CNAME')).toString().replace(/(\s|\n)/g, '')
  let siteMapString = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">URLS</urlset>`
  siteMapString = siteMapString.replace('URLS', siteMap.map(path => `<url><loc>https://${domain}${path}</loc></url>`).join(''))
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, 'public/sitemap.xml'), siteMapString, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}
