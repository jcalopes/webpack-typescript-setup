import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app-root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <div>
            <h1>Hey we finally get there!</h1>
            <h3>That&quot;s the beauty of this.</h3>
        </div>
    </React.StrictMode>
);