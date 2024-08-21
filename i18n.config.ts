export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'de',
    messages: {
        en: {
            welcome: 'Welcome',
            bio: "Biography",
        },
        de: {
            welcome: 'Willkommen',
            bio: "Biographie",
        }
    }
}))
