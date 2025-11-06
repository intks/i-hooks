import { readFileSync } from 'fs'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { preserveDirectives } from 'rollup-plugin-preserve-directives'
import dts from 'vite-plugin-dts'

const packageJson = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }))

const globals = {
  ...(packageJson?.dependencies || {}),
}

export default defineConfig(({ command }) => {
  const isLibrary = command === 'build'

  if (isLibrary) {
    // Library build configuration
    return {
      plugins: [
        react(),
        dts({
          outDir: 'dist',
          include: ['src/index.ts', 'src/hooks/**/*'],
          exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
          tsconfigPath: './tsconfig.build.json',
        }),
      ],
      build: {
        lib: {
          entry: ['src/index.ts'],
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'lodash', 'lodash-es', 'react/jsx-runtime', ...Object.keys(globals)],
          output: {
            preserveModules: true,
            preserveModulesRoot: 'src',
            entryFileNames: '[name].js',
          },
          plugins: [preserveDirectives({})],
        },
        copyPublicDir: false,
      },
    }
  }

  // Development playground configuration
  return {
    plugins: [react()],
  }
})
