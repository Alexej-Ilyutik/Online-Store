import './views/styles/index.scss';

import { Header } from './views/components/header';
import { Footer } from './views/components/footer';
import { MainPage, renderCards, filterByType, filterByYear, searchCard } from './views/pages/mainPage';
import { RangeSlider } from './services/rangeSlider';
import { data } from './data';
import { ICard } from './views/pages/PageRender';
import { IFilter } from './services/filter';
import { CardsSort } from './services/sort';

customElements.define('my-range-slider', RangeSlider);

const WRAPPER = document.querySelector('.wrapper');

async function router() {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const mainPage = null || document.getElementById('main');

    let count = 0;

    header.innerHTML = await Header.render(count);
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

    const filterObj: IFilter = {
        brandFilter: false,
        bodyFilter: false,
        colorFilter: false,
        transmissionFilter: false,
        fuelFilter: false,
        sortFilter: false,
        yearFilter: false,
        popFilter: false,
        searchFilter: false,
    };

    let brandArr: ICard[] = [];
    let bodyArr: ICard[] = [];
    let colorArr: ICard[] = [];
    let transmissionArr: ICard[] = [];
    let fuelArr: ICard[] = [];
    let sortArr: ICard[] = [];
    let yearArr: ICard[] = [];
    let popArr: ICard[] = [];
    let searchArr: ICard[] = [];

    let brandCount = 0;
    let bodyCount = 0;
    let colorCount = 0;

    WRAPPER.addEventListener('click', async (e: Event) => {
        let currentCardArr: ICard[] = [...data];
        const target = e.target as HTMLElement;
        const currentValue = target.dataset.filter;

        if (target.classList.contains('brand')) {
            filterObj.brandFilter = true;
            brandArr = [];
            if (!target.classList.contains('brand-active')) {
                target.classList.add('brand-active');
                filterBrandObj[currentValue] = true;
                brandCount++;
            } else if (target.classList.contains('brand-active')) {
                target.classList.remove('brand-active');
                filterBrandObj[currentValue] = false;
                brandCount--;
            }
            if (brandCount !== 0) {
                for (const brandName in filterBrandObj) {
                    if (filterBrandObj[brandName]) {
                        const currentArr = filterByType(currentCardArr, 'brand', brandName);
                        brandArr = [...brandArr, ...currentArr];
                    }
                }
            } else {
                brandArr = [...currentCardArr];
            }

            console.log(brandCount);
        }

        if (target.classList.contains('body')) {
            filterObj.bodyFilter = true;
            bodyArr = [];
            if (!target.classList.contains('body-active')) {
                target.classList.add('body-active');
                filterBodyObj[currentValue] = true;
                bodyCount++;
            } else if (target.classList.contains('body-active')) {
                target.classList.remove('body-active');
                filterBodyObj[currentValue] = false;
                bodyCount--;
            }

            if (bodyCount !== 0) {
                for (const bodyName in filterBodyObj) {
                    if (filterBodyObj[bodyName]) {
                        const currentArr = filterByType(currentCardArr, 'body', bodyName);
                        bodyArr = [...bodyArr, ...currentArr];
                    }
                }
            } else {
                bodyArr = [...currentCardArr];
            }
        }

        if (target.classList.contains('color')) {
            filterObj.colorFilter = true;
            colorArr = [];

            if (!target.classList.contains('color-active')) {
                target.classList.add('color-active');
                filterColorObj[currentValue] = true;
                colorCount++;
            } else if (target.classList.contains('color-active')) {
                target.classList.remove('color-active');
                filterColorObj[currentValue] = false;
                colorCount--;
            }

            if (colorCount !== 0) {
                for (const bodyColor in filterColorObj) {
                    if (filterColorObj[bodyColor]) {
                        const currentArr = filterByType(currentCardArr, 'color', bodyColor);
                        colorArr = [...colorArr, ...currentArr];
                    }
                }
            } else {
                colorArr = [...currentCardArr];
            }
        }

        if (target.classList.contains('transmission')) {
            if ((<HTMLInputElement>target).value == 'All') {
                transmissionArr = [...data];
            } else {
                const currentArr = filterByType(currentCardArr, 'transmission', (<HTMLInputElement>target).value);
                filterObj.transmissionFilter = true;
                transmissionArr = [...currentArr];
            }
        }

        if (target.classList.contains('fuel')) {
            if ((<HTMLInputElement>target).value == 'All') {
                fuelArr = [...data];
            } else {
                const currentArr = filterByType(currentCardArr, 'fuel', (<HTMLInputElement>target).value);
                filterObj.fuelFilter = true;
                fuelArr = [...currentArr];
                console.log(currentArr);
            }
        }

        if (target.classList.contains('sort')) {
            if ((<HTMLInputElement>target).value == 'Without') {
                sortArr = [...data];
            } else {
                filterObj.sortFilter = true;
                const currentArr = new CardsSort(currentCardArr);
                switch ((<HTMLInputElement>target).value) {
                    case 'sort-name-max':
                        currentArr.sortAtoZ();
                        break;
                    case 'sort-name-min':
                        currentArr.sortZtoA();
                        break;
                    case 'sort-year-max':
                        currentArr.sortYearMax();
                        break;
                    case 'sort-year-min':
                        currentArr.sortYearMin();
                        break;
                }
                sortArr = [...currentArr.cardArray];
            }
        }

        if (target.classList.contains('runner-thumb')) {
            filterObj.yearFilter = true;
            const yearSlider = <RangeSlider>document.getElementById('range-slider-year');
            const yearStartVal = +yearSlider.startValue;
            const yearEndVal = +yearSlider.endValue;

            const currentArr = filterByYear(currentCardArr, yearStartVal, yearEndVal);
            yearArr = [...currentArr];
        }

        if (target.classList.contains('popular__input')) {
            if ((<HTMLInputElement>target).checked) {
                filterObj.popFilter = true;
                const currentArr = filterByType(currentCardArr, 'favorite', true);
                popArr = [...currentArr];
            } else {
                filterObj.popFilter = false;
            }
        }

        if (target.classList.contains('search-btn')) {
            const SEARCH = document.querySelector('.search');
            filterObj.searchFilter = true;
            const currentArr = searchCard(currentCardArr, (<HTMLInputElement>SEARCH).value);
            searchArr = [...currentArr];
        }

        if (target.classList.contains('card__button')) {
            const cardNum = currentCardArr.find((number) => number.num === currentValue);
            if (!target.classList.contains('card-active')) {
                cardNum.btn = true;
                target.classList.add('card-active');
                count++;
            } else if (target.classList.contains('card-active')) {
                cardNum.btn = false;
                target.classList.remove('card-active');
                count--;
            }
            mainPage.innerHTML = await MainPage.render();
            header.innerHTML = await Header.render(count);
        }

        if (target.classList.contains('tools__reset')) {
            for (const obj in filterObj) {
                filterObj[obj] = false;
            }
            const allBtn = document.querySelectorAll('.tools__button');
            const allSelect = document.querySelectorAll('.tools__select');
            const popCheck = document.querySelector('.popular__input');
            const yearSlider = <RangeSlider>document.getElementById('range-slider-year');
            yearSlider.startValue = 2000;
            yearSlider.endValue = 2021;

            allBtn.forEach((el) => {
                el.classList.remove('brand-active');
                el.classList.remove('body-active');
                el.classList.remove('color-active');
            });
            allSelect.forEach((sort) => (sort.getElementsByTagName('option')[0].selected = true));
            (<HTMLInputElement>popCheck).checked = false;
        }

        if (filterObj.brandFilter) {
            currentCardArr = [...brandArr];
        }

        if (filterObj.bodyFilter) {
            currentCardArr = [...bodyArr];
        }

        if (filterObj.colorFilter) {
            currentCardArr = [...colorArr];
        }

        if (filterObj.transmissionFilter) {
            currentCardArr = [...transmissionArr];
        }

        if (filterObj.fuelFilter) {
            currentCardArr = [...fuelArr];
        }

        if (filterObj.sortFilter) {
            currentCardArr = [...sortArr];
        }

        if (filterObj.yearFilter) {
            currentCardArr = [...yearArr];
        }

        if (filterObj.popFilter) {
            currentCardArr = [...popArr];
        }

        if (filterObj.searchFilter) {
            currentCardArr = [...searchArr];
        }
        // console.log(currentCardArr);
        // console.log(brandFilter);
        // console.log(bodyFilter);
        // console.log(brandArr);
        // console.log(bodyArr);
        // renderCards(currentCardArr);
        renderCards(currentCardArr);
        // console.log(currentCardArr);
    });
}

window.addEventListener('load', windowsOnLoad);
function windowsOnLoad() {
    router();
}
