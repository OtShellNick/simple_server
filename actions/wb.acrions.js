const getCatalogData = async () => {
    try {
        return await fetch('https://card.wb.ru/cards/detail?dest=123585535&nm=138593051;94340317;94340606;138590435;138607462;94339119;94339244')
            .then(resp => resp.json());
    } catch (e) {
        console.log('error fetching catalog data', e);
    }
};

module.exports = {
    getCatalogData
}