import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n} = useTranslation(['home']);
    return (
        <div>
            <div>
                    <button value= "en" onClick={() => i18n.changeLanguage('en')}>en</button>
                    <button value= "de" onClick={() => i18n.changeLanguage('de')}>de</button>
            </div>
            <div>
                <h1>{t('title')}</h1>
                <h3>{t('subtitle')}</h3>
                <input type="button" value={t('button')} />
            </div>
        </div>
    );
}

export default Home;