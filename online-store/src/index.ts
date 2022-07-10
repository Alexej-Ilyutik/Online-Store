import './views/styles/index.scss';

import { Header } from './views/components/header';
import { Footer } from './views/components/footer';

async function router() {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header.render();
    footer.innerHTML = await Footer.render();
}

window.addEventListener('load', windowsOnLoad);
async function windowsOnLoad() {
    await router();
}
