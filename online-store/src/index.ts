import './views/styles/index.scss';

import { Header } from './views/components/header';

async function router() {
    const header = null || document.getElementById('header');

    header.innerHTML = await Header.render();
}

window.addEventListener('load', windowsOnLoad);
async function windowsOnLoad() {
    await router();
}
