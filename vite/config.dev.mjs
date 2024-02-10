import { defineConfig } from 'vite';

export default defineConfig({
    base: 'https://juan1639.github.io/Galaximi-vite',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
    },
    server: {
        port: 8080
    }
});
