/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

const srcPath = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, 'env'),
  assetsInclude: [
    '**/*.gltf',
    '**/*.glb'
  ],
  resolve: {
    alias: {
      '@/': `${srcPath}/`
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: resolve(srcPath, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: resolve(srcPath, 'components.d.ts')
    }),
    legacy({
      targets: ['defaults', 'not IE 11', 'not chrome < 80', 'not firefox < 90']
    }),
  ],
  build: {
    target: ['es2020', 'chrome80', 'firefox90'], // 最低支持ES2015
    rollupOptions: {
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
