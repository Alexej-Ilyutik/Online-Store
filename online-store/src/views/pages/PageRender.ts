interface PageRender {
    render(): Promise<string>;
}

interface ICard {
    [key: string]: string | boolean;
    num: string;
    brand: string;
    model: string;
    year: string;
    body: string;
    color: string;
    transmission: string;
    fuel: string;
    favorite: boolean;
}

export { PageRender, ICard };
