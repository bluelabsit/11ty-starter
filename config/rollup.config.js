import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'

const plugins = [
  json(),
  nodeResolve(),
  commonjs({
    transformMixedEsModules: true,
    ignoreDynamicRequires: true,
    dynamicRequireTargets: ['./src/js/modules/header-links.js', './src/js/modules/thankyou.js'],
  }),
]
if (isProd) {
  plugins.push(terser())
}

export default {
  input: './src/js/app.js',
  output: {
    file: './public/js/app.js',
    format: 'iife',
    name: 'MyModule',
  },
  plugins,
}
