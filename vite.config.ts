import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src/templates/views/')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: "/",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        knowledge: resolve(root, 'knowledge', 'index.html'),
        certification: resolve(root, 'certification', 'index.html'),
        contact: resolve(root, 'contact', 'index.html'),
      }
    }
  }

})