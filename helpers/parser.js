const getParsedData = ({ data: { products } }) => {

    const parsedData = products.reduce((acc, product) => {

        const { id, sizes } = product;

        const reducedData = {
            Art: id,
            amount: sizes.reduce((acc, item) => {
                const { name, stocks } = item;

                const stockData = stocks.filter(stock => stock.wh === 117986);

                return { ...acc, [name]: stockData.length ? stockData[0].qty : 0 };
            }, {})
        };

        return [...acc, reducedData];
    }, []);

    return parsedData;
};

module.exports = {
    getParsedData
}