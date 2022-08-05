const fs = require('fs')
const CleanCss = require('clean-css');

const DATAFILE =  '_data/csshash.json';
const CSSFILE = 'public/assets/css/index.css'

const cssHash = JSON.parse(fs.readFileSync(DATAFILE, 'utf-8'));
const MINIFIED_CSSFILE = `public/assets/css/${cssHash.indexCSS}`;

const cssFile = fs.readFileSync(CSSFILE, 'utf-8');

const minified = new CleanCss({}).minify(cssFile).styles;

fs.unlinkSync(CSSFILE);
fs.writeFileSync(MINIFIED_CSSFILE, minified);
