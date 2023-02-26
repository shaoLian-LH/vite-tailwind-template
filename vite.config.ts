import { defineConfig, mergeConfig } from 'vite'
import BasicConfig from './vite.config.basic'

// https://vitejs.dev/config/
export default mergeConfig(BasicConfig, defineConfig({
  mode: 'production',
  build: {
    manifest: true,
    minify: 'terser',
    terserOptions: {
      sourceMap: false
    },
    modulePreload: {
      polyfill: true
    },
    sourcemap: 'hidden', // 指定生成的sourcemap的格式
    chunkSizeWarningLimit: 1024 // 单位为kbs，次数代表不超过1MB不进行警告
  }
}))