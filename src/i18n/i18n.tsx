import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import homeDe from '../../public/locales/de/home.json';
import homeEn from '../../public/locales/en/home.json';

const resources = {
    en: {
        home: homeEn,
    },
    de: {
        home: homeDe,
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        debug: false,
        fallbackLng: 'en',
        saveMissing: true
    });

export default i18next;