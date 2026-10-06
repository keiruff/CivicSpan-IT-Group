// Test metadata and sitemap without fetching fonts or changing application builds.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')
const Module = require('node:module')
const original = Module._resolveFilename
Module._resolveFilename = function (name, ...args) {
  return original.call(this, name.startsWith('@/') ? path.join(process.cwd(), 'src', name.slice(2)) : name, ...args)
}
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 } }).outputText, filename)
const sitemap = require('../src/app/sitemap.ts').default()
const { pageMetadata, siteUrl } = require('../src/lib/seo.ts')
const { staticRoutes } = require('../src/lib/static-routes.ts')
const routes = []
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name)
    if (item.isDirectory()) walk(file)
    else if (item.name === 'page.tsx' && !file.includes('[')) {
      routes.push('/' + path.relative('src/app', dir).split(path.sep).filter(x => x && !x.startsWith('(')).join('/'))
      const page = fs.readFileSync(file, 'utf8')
      const layout = path.join(dir, 'layout.tsx')
      assert(page.includes('pageMetadata(') || (fs.existsSync(layout) && fs.readFileSync(layout, 'utf8').includes('pageMetadata(')), `Missing page metadata: ${file}`)
    }
  }
}
walk('src/app')
assert.deepEqual([...staticRoutes].sort(), routes.sort())
assert.equal(new Set(sitemap.map(x => x.url)).size, sitemap.length)
for (const entry of sitemap) {
  assert(entry.url.startsWith(siteUrl + '/'))
  const route = entry.url.slice(siteUrl.length)
  const metadata = pageMetadata('Test title', 'Test description', route)
  assert.equal(metadata.alternates.canonical, entry.url)
  assert.equal(metadata.openGraph.url, entry.url)
  assert.equal(metadata.twitter.title, metadata.title)
}
assert(fs.existsSync('public/social-card.png'))
assert(!fs.existsSync('public/sitemap.xml'))
assert(!fs.existsSync('public/robots.txt'))
console.log(`SEO checks passed: ${routes.length} static pages, ${sitemap.length} unique sitemap URLs; canonical and sharing metadata aligned.`)
