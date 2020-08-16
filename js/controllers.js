export const setContent = async (HTMLPage, elementID) => {
    const response = await fetch(`pages/${HTMLPage}.html`);
    document.getElementById(elementID).innerHTML = await response.text();
}

export const HomeController = async (app) => {
    app.getObject('QV01', 'qamd');
}

export const Pagina01Controller = async (app) => {
    app.getObject('QV02', 'qamd');
}

export const Pagina02Controller = async (app) => {
    app.getObject('QV03', 'qamd');
}