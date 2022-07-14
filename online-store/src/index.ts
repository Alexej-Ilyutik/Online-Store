import './views/styles/index.scss';

import { Header } from './views/components/header';
import { Footer } from './views/components/footer';
import { MainPage, renderCards } from './views/pages/mainPage';
import { RangeSlider } from './services/rangeSlider';

customElements.define('my-range-slider', RangeSlider);

async function router() {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const mainPage = null || document.getElementById('main');

    header.innerHTML = await Header.render();
    footer.innerHTML = await Footer.render();
    mainPage.innerHTML = await MainPage.render();

    const FEED_CONTAINER = null || document.querySelector('.main__feed');
    renderCards(FEED_CONTAINER);
}

window.addEventListener('load', windowsOnLoad);
async function windowsOnLoad() {
    await router();
}
