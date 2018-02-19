// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: './dist/index.module.js',
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({
      presets: [
        ['es2015', { modules: false }],
        'es2016',
        'es2017',
        'stage-3',
      ],
      plugins: [
        'external-helpers',
      ],
      babelrc: false,
    }),
  ],
  output: {
    format: 'umd',
    exports: 'named',
    extend: true,
    name: 'Boilerplate',
    file: './dist/index.js',
    sourcemap: true,
  },
}
