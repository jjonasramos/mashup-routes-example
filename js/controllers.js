export const setContent = async (HTMLPage, elementID) => {
    const response = await fetch(`pages/${HTMLPage}.html`);
    document.getElementById(elementID).innerHTML = await response.text();
}

export const HomeController = app => {
    app.getObject('QV01', 'qamd');
}

export const Pagina01Controller = app => {
    app.getObject('QV02', 'VtfsZDc');
}

export const Pagina02Controller = app => {
    app.getObject('QV03', 'qEqbcMm');
}
