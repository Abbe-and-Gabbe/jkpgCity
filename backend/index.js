const express = require('express');
const app = express();
const PORT = 8080;

const storeModel = require('./src/models/storeModel.js');
const model = new storeModel();

app.get('/', async (req, res) => {
    const stores = await model.getAllStores();
    res.send(stores);
});

app.get('/:id', async (req, res) => {
    const storeId = req.params.id;
    const specificStore = await model.getStoreById(storeId);
    res.send(specificStore);
});

const server = async () => {
    app.listen(PORT, () => {
        console.log('Server is running on port: ${PORT}');
    });
}

server();