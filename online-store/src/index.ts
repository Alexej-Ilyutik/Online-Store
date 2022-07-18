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

    const filterColorObj: IFilter = {
        Black: false,
        White: false,
        Blue: false,
        Red: false,
        Gray: false,
    };

    let brandFilter = false;
    let bodyFilter = false;
    let colorFilter = false;

    let brandArr: ICard[] = [];
    let bodyArr: ICard[] = [];
    let colorArr: ICard[] = [];

    WRAPPER.addEventListener('click', (e: Event) => {
        let currentCardArr: ICard[] = [...data];
        const target = e.target as HTMLElement;
        const currentValue = target.dataset.filter;

        if (target.classList.contains('brand')) {
            brandFilter = true;
            brandArr = [];
            if (!target.classList.contains('brand-active')) {
                target.classList.add('brand-active');
                filterBrandObj[currentValue] = true;
            } else if (target.classList.contains('brand-active')) {
                target.classList.remove('brand-active');
                filterBrandObj[currentValue] = false;
            }
            for (const brandName in filterBrandObj) {
                if (filterBrandObj[brandName]) {
                    const currentArr = filterByType(currentCardArr, 'brand', brandName);
                    brandArr = [...brandArr, ...currentArr];
                }
            }
        }

        if (target.classList.contains('body')) {
            bodyFilter = true;
            bodyArr = [];
            if (!target.classList.contains('body-active')) {
                target.classList.add('body-active');
                filterBodyObj[currentValue] = true;
            } else if (target.classList.contains('body-active')) {
                target.classList.remove('body-active');
                filterBodyObj[currentValue] = false;
            }
            for (const bodyName in filterBodyObj) {
                if (filterBodyObj[bodyName]) {
                    const currentArr = filterByType(currentCardArr, 'body', bodyName);
                    bodyArr = [...bodyArr, ...currentArr];
                }
            }
        }

        if (target.classList.contains('color')) {
            colorFilter = true;
            colorArr = [];

            if (!target.classList.contains('color-active')) {
                target.classList.add('color-active');
                filterColorObj[currentValue] = true;
            } else if (target.classList.contains('color-active')) {
                target.classList.remove('color-active');
                filterColorObj[currentValue] = false;
            }

            for (const bodyColor in filterColorObj) {
                if (filterColorObj[bodyColor]) {
                    const currentArr = filterByType(currentCardArr, 'color', bodyColor);
                    colorArr = [...colorArr, ...currentArr];
                }
            }
        }

        if (target.classList.contains('tools__select')) {
            console.log(target);
        }
        // if (brandFilter) {
        //     if (bodyFilter) {
        //         currentCardArr = [...bodyArr];
        //     } else {
        //         currentCardArr = [...brandArr];
        //     }

        // } else if (bodyFilter) {
        //     currentCardArr = [...bodyArr];
        // } else {
        //     currentCardArr = [...data];
        // }
        if (brandFilter) {
            currentCardArr = [...brandArr];
        }

        if (bodyFilter) {
            currentCardArr = [...bodyArr];
        }

        if (colorFilter) {
            currentCardArr = [...colorArr];
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
