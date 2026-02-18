import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/web/',
  root: path.resolve(__dirname, 'src/web'),
  publicDir: path.resolve(__dirname, 'src/web/public'),
  build: {
    outDir: path.resolve(__dirname, 'dist/web'),
    emptyOutDir: true,
  },
  // @ts-expect-error
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/root': path.resolve(__dirname, './'),
      '@/shadcn': path.resolve(__dirname, './src/shadcn'),
    },
  },
})
