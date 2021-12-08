import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import usePluginImporter from 'vite-plugin-importer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    usePluginImporter({
      libraryName: '@material-ui/core',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
    usePluginImporter({
      libraryName: '@material-ui/icons',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [require('postcss-nested'), require('autoprefixer')],
    },
  },
  server: {
    open: '/#AlignVerticalBottomOutlined',
  },
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
});
