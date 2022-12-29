import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import '../src/i18n/i18n';

const container = document.getElementById('app-root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <div>
           <Home/>
        </div>
    </React.StrictMode>
);