/**
 * Vite Configuration
 * 
 * Optimized build configuration for performance and scalability.
 * Uses modern JavaScript features and optimizations.
 * 
 * @module vite.config
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/demo/',
  plugins: [
    react({
      // Enable SWC for faster builds and better performance
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    // Enable modern output for better performance
    minify: 'esbuild',
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ui-vendor': ['lucide-react', 'recharts'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Source maps for production debugging
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
    // Enable HMR for faster development
    hmr: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@reduxjs/toolkit', 'react-redux'],
  },
  // Environment variables
  envPrefix: 'VITE_',
});