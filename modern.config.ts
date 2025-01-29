import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    runtime: {
        router: true,
    },
    dev: {
        port: 3001,
    },
    output: {
        assetPrefix:
            process.env.NODE_ENV === 'production'
                ? 'https://starling-ui-design-system.netlify.app/'
                : 'http://localhost:3001/',
    },
    plugins: [
        appTools({
            bundler: 'rspack', // Set to 'webpack' to enable webpack
        }),
        moduleFederationPlugin({ ssr: false }),
    ],
    html: {
        favicon: './src/assets/favicon-32x32.png',
    },
});
