import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'

export default defineConfig({
  input: [
    'src/index.ts',
  ],
  plugins: [
    del({
      targets: 'dist/*',
    }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
    }),
  ],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
    },
  ],
})
