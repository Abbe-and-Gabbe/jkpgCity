const express = require('express');
const app = express();
const PORT = 8080;

const storeModel = require('./src/models/storeModel.js');
const model = new storeModel();

app.get('/', async(req, res) => {
    const stores = await model.getAllStores();
    res.send(stores);
});

const server = async() => {
    app.listen(PORT, () => {
        console.log('Server is running on port: ${PORT}');
    });
}

server();