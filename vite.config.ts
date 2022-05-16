import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const srcPath = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(srcPath, 'env'),
  resolve: {
    alias: {
      '@/': `${srcPath}/`
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: resolve(srcPath, 'auto-imports.d.ts')
    }),
    Components({
      dts: resolve(srcPath, 'components.d.ts')
    }),
  ]
})
