import './views/styles/index.scss';

import { Header } from './views/components/header';
import { Footer } from './views/components/footer';
import { MainPage, renderCards, filterByType } from './views/pages/mainPage';
import { RangeSlider } from './services/rangeSlider';
import { data } from './data';
import { ICard } from './views/pages/PageRender';
import { IFilter } from './services/filter';

customElements.define('my-range-slider', RangeSlider);

const WRAPPER = document.querySelector('.wrapper');

async function router() {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const mainPage = null || document.getElementById('main');

    header.innerHTML = await Header.render();
    footer.innerHTML = await Footer.render();
    mainPage.innerHTML = await MainPage.render();

    renderCards(data);

    const filterBrandObj: IFilter = {
        Audi: false,
        BMW: false,
        Ford: false,
        Honda: false,
        Mercedes: false,
        Porsche: false,
    };

    const filterBodyObj: IFilter = {
        Coupe: false,
        Hatchback: false,
        Pickup: false,
        SUV: false,
        Sedan: false,
    };

    let brandFilter = false;
    let bodyFilter = false;
    let brandArr: ICard[] = [];
    let bodyArr: ICard[] = [];
    let currentCardArr: ICard[] = [...data];

    WRAPPER.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const currentValue = target.dataset.filter;

        if (target.classList.contains('brand')) {
            brandFilter = true;
            if (!target.classList.contains('brand-active')) {
                target.classList.add('brand-active');
                filterBrandObj[currentValue] = true;
                for (const brandName in filterBrandObj) {
                    if (filterBrandObj[brandName]) {
                        const currentCardArr = filterByType(data, 'brand', brandName);
                        brandArr = [...brandArr, ...currentCardArr];
                    }
                }
            } else if (target.classList.contains('brand-active')) {
                target.classList.remove('brand-active');
                filterBrandObj[currentValue] = false;
                brandArr = [];
                for (const brandName in filterBrandObj) {
                    if (filterBrandObj[brandName]) {
                        const currentCardArr = filterByType(data, 'brand', brandName);
                        brandArr = [...brandArr, ...currentCardArr];
                    }
                }
            }
        }

        if (target.classList.contains('body')) {
            bodyFilter = true;
            if (!target.classList.contains('brand-active')) {
                target.classList.add('brand-active');
                filterBodyObj[currentValue] = true;
                for (const bodyName in filterBodyObj) {
                    if (filterBodyObj[bodyName]) {
                        if (brandFilter) {
                            const currentCardArr = filterByType(brandArr, 'body', bodyName);
                            bodyArr = [...bodyArr, ...currentCardArr];
                        } else {
                            const currentCardArr = filterByType(data, 'body', bodyName);
                            bodyArr = [...bodyArr, ...currentCardArr];
                        }
                    }
                }
            } else if (target.classList.contains('brand-active')) {
                target.classList.remove('brand-active');
                filterBodyObj[currentValue] = false;
                bodyArr = [];
                for (const bodyName in filterBodyObj) {
                    if (filterBodyObj[bodyName]) {
                        if (brandFilter) {
                            const currentCardArr = filterByType(brandArr, 'body', bodyName);
                            bodyArr = [...bodyArr, ...currentCardArr];
                        } else {
                            const currentCardArr = filterByType(data, 'body', bodyName);
                            bodyArr = [...bodyArr, ...currentCardArr];
                        }
                    }
                }
            }
        }
        // if (target.classList.contains('color')) {
        //     target.classList.toggle('color-active');
        // }
        // console.log(filterBrandArr);
        // if (target.classList.contains('brand')) {
        //     console.log('brand');
        // }
        // if (target.classList.contains('body')) {
        //     console.log('body');
        // }

        if (brandFilter) {
            if (bodyFilter) {
                currentCardArr = [...bodyArr];
            } else {
                currentCardArr = [...brandArr];
            }
        } else if (bodyFilter) {
            currentCardArr = [...bodyArr];
        } else {
            currentCardArr = [...data];
        }
        // console.log(currentCardArr);
        // console.log(brandFilter);
        // console.log(bodyFilter);
        // console.log(brandArr);
        // console.log(bodyArr);

        renderCards(currentCardArr);

        // console.log(currentCardArr);
    });
}

window.addEventListener('load', windowsOnLoad);
async function windowsOnLoad() {
    await router();
}
