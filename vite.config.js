import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer' // Optional, for bundle analysis

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'bundle-stats.html',
      open: true, // Automatically opens the report after build
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // In KB, raises the warning threshold
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       // Split common libraries into separate chunks
    //       vendor: ['react', 'react-dom'],
    //       animation: ['framer-motion'],
    //       carousel: ['react-slick', 'swiper'],
    //     },
    //   },
    // },
  },
})
