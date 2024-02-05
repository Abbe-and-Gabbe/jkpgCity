import { Router } from "express";
import { pool } from "../storeModel.js";

const router = Router();


router.get("/", async (req, res) => {
    console.log("GET /store");
    try {
        const conn = await pool.getConnection();
        const stores = await conn.query("SELECT * FROM store");
        console.log(stores);
        res.json(stores);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});


export default router;