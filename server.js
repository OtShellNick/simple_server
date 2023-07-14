const http = require('http');
const { getCatalogData } = require('./actions/wb.acrions');
const { getParsedData } = require('./helpers/parser');

const HOST = 'localhost';
const PORT = '8088';

const serverListener = async (req, res) => {
    const { url } = req;

    res.setHeader("Content-Type", "application/json");


    switch (url) {
        case '/amount':

            try {
                const data = await getCatalogData();

                const parsedData = getParsedData(data);

                res.writeHead(200);
                res.write(JSON.stringify(parsedData))
                res.end();
            } catch (e) {
                console.log(e);
            }

            break;

        default:

            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    };

};

const server = http.createServer(serverListener);


server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});