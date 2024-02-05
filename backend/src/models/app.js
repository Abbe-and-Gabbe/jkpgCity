import express from "express";
import cors from "cors";
import storeRouter from "./routes/store.js";

import { request } from "https";

const PORT = 8080;

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(function (request, response, next) {
    response.set("Access-Control-Allow-Origin", "*")
    response.set("Access-Control-Allow-Methods", "*")
    response.set("Access-Control-Allow-Headers", "*")
    response.set("Access-Control-Expose-Headers", "*")
    next()
})

app.use(express.json())

app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/store", storeRouter);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});