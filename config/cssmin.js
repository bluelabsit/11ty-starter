const fs = require('fs')
const CleanCss = require('clean-css')

const DATAFILE = 'src/data/csshash.json'
const CSSFILE = 'public/css/app.css'

const cssHash = JSON.parse(fs.readFileSync(DATAFILE, 'utf-8'))
const MINIFIED_CSSFILE = `public/css/${cssHash.indexCSS}`

const cssFile = fs.readFileSync(CSSFILE, 'utf-8')

const minified = new CleanCss({}).minify(cssFile).styles

fs.unlinkSync(CSSFILE)
fs.writeFileSync(MINIFIED_CSSFILE, minified)
