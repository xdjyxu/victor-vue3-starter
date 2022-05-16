import { createI18n } from 'vue-i18n';
import { chain } from 'lodash';

const languages = import.meta.globEager('./lang/*')

function getLangFiles(langList: Record<string, { [key: string]: any; }>) {
    return chain(langList)
        .mapKeys((value, key) => key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.json')))
        .mapValues(value => value.default)
        .value();
}


export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || navigator.language,
    fallbackLocale: 'en',
    silentFallbackWarn: true,
    formatFallbackMessages: true,
    messages: getLangFiles(languages)
})

export const setLocale = (locale: string) => {
    localStorage.setItem('locale', locale)
    i18n.global.locale.value = locale
}
