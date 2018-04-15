// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import path from 'path'

const pkg = require('./package.json')

export default {
  input: './test/unit.js',
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({
      presets: [
        'es2016',
        'es2017',
        'stage-3',
        'stage-2',
      ],
      plugins: [
        'external-helpers',
      ],
      babelrc: false,
    }),
  ],
  external: [
    'source-map-support/register',
    path.resolve(pkg.browser),
    'chai',
    'mocha',
  ],
  output: {
    globals: {
      [path.resolve(pkg.browser)]: 'Boilerplate',
      'chai': 'chai',
      'mocha': 'mocha',
    },
    format: 'iife',
    file: './dist/test/unit.js',
    sourcemap: true,
  },
}
