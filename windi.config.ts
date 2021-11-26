import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  preflight: true,
  //
  prefix: 'wd-',
  // 只扫描src下的jsx，tsx，html文件
  extract: {
    include: ['src/**/*.{jsx,tsx,html}'],
  },
});
