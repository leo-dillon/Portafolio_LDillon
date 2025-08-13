// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    env: {
        schema: {
            RESEND_API_TOKEN: envField.string( { context: 'server', access: 'secret' } ),
            MI_GMAIL : envField.string( { context: 'server', access: 'secret' } )
        }
    },
    adapter: vercel(),

});