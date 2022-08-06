import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === 'production';

const plugins = [nodeResolve()]
if (isProd) {
  plugins.push(terser());
}

export default {
  input: './src/js/app.js',
  output: {
    file: './public/js/app.js',
    format: 'iife'
  },
  plugins
};
