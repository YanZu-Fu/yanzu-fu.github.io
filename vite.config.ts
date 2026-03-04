import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import postCssPxToRem from 'postcss-pxtorem';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(({ mode }) => {
    const { VITE_APP_NGINX_VPATH_NAME, VITE_BASE_API, VITE_COMPRESSION } = loadEnv(mode, process.cwd());
    return {
        base: `/${VITE_APP_NGINX_VPATH_NAME}/`,
        plugins: [
            vue(),
            vueJsx(),
            AutoImport({
                dts: 'types/auto-import.d.ts',
                include: [/\.[tj]sx?$/, /\.vue$/],
                imports: ['vue', 'vue-router', 'vue-i18n', 'pinia'], // 自动导入vue和vue-router相关函数
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            host: '0.0.0.0',
            port: 8028,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                '/levault': `${VITE_BASE_API}/`,
            },
        },
        build: {
            target: 'esnext',
            sourcemap: false,
            // 消除打包大小超过500kb警告
            chunkSizeWarningLimit: 4000,
            outDir: './dist',
            rollupOptions: {
                input: {
                    index: fileURLToPath(new URL('./index.html', import.meta.url)),
                },
                // 静态资源分类打包
                output: {
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                },
            },
        },
        css: {
            postcss: {
                plugins: [
                    // 更多设置参考 https://www.npmjs.com/package/postcss-pxtorem
                    postCssPxToRem({
                        // rootValue：根元素的值，即1rem对应的像素值大小。一般设置为设计稿尺寸/10，比如设计稿是750px，那么rootValue就是75
                        rootValue: 37.5,
                        // 需要进行转换的css属性的值
                        propList: ['*'],
                        // exclude: function (file) { return !file.includes('index.design.less'); },
                    }),
                ],
            },
        },
    };
});
