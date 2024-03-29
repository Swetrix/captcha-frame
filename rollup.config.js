// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import { uglify } from '@blaumaus/rollup-plugin-uglify'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

const CAPTCHA_PATH = 'src/captcha.ts'
const CAPTCHA_LOADER_PATH = 'src/captcha-loader.ts'

export default [
  {
    input: CAPTCHA_PATH,
    output: [
      // { file: pkg.main, format: 'cjs' },
      // { file: pkg.module, format: 'es' },
      {
        file: pkg.captcha,
        format: 'umd',
        name: 'captcha',
      },
    ],
    plugins: [
      typescript(),
      uglify(),

      // copying assets
      copy({
        targets: [
          { src: 'src/assets/*', dest: 'dist/assets' },
          { src: 'src/pages/*', dest: 'dist/pages' },
        ],
      }),
    ],
  },
  {
    input: CAPTCHA_LOADER_PATH,
    output: [
      {
        file: pkg.captchaloader,
        format: 'umd',
        name: 'captcha-loader',
      },
    ],
    plugins: [
      typescript(),
      sourceMaps(),
      uglify(),
    ],
  },
]
