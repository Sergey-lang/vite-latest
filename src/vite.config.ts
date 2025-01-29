import { resolve } from 'path';

import {defineConfig, UserConfig} from "vite";

const libraryConfig = defineConfig({
    assetsInclude: './src/assets/**',
    css: {
        modules: {
          localsConvention: 'camelCase',
        },
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    build: {
        outDir: resolve(__dirname, './dist'),
        minify: true,
        sourcemap: true,
    }
}) satisfies UserConfig;

export default libraryConfig;
