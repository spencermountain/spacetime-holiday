import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'builds/spacetime-holiday.mjs',
        format: 'esm'
      }
    ],
    plugins: [resolve(), json(), commonjs()]
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'builds/spacetime-holiday.js',
        format: 'umd',
        sourcemap: true,
        name: 'spacetimeHoliday'
      }
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      })
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'builds/spacetime-holiday.min.js',
        format: 'umd',
        name: 'spacetimeHoliday'
      }
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      }),
      terser()
    ]
  }
]
