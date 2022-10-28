import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'

const plugins = [
  json(),
  nodeResolve(),
  commonjs({
    include: '/node_modules/**',
  }),
  dynamicImportVars({
    // options
  }),
]
if (isProd) {
  plugins.push(terser())
}

export default {
  input: './src/js/app.js',
  output: {
    dir: './public/js',
    // file: './public/js/app.js',
    format: 'es',
    name: 'MyModule',
  },
  plugins,
}
