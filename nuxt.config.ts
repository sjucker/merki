// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n",
    ],
    i18n: {
        strategy: 'prefix',
        defaultLocale: 'de',
        dynamicRouteParams: true,
        locales: [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'de',
                name: 'Deutsch'
            },
        ]
    }
})
