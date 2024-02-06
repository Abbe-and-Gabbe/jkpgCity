const { createPool } = require('mariadb');

/**
 * @class Store Model
 * @classdesc Used to connect to the database and handle the stores table
 * @requires mariadb
 * @requires dotenv // Will be added later!! We can not show passwords...
 */
class StoreModel {
    constructor() {
        // This should probably be done somewhere else
        // But for now, it's fine
        this.pool = createPool({
            host: 'db',
            port: 3306,
            user: 'root',
            password: 'abc123',
            database: 'jkpg'
        });

        this.pool.on('error', (err) => {
            console.error('Database error:', err);
        });
    }

    async getAllStores() {
        const sql = 'SELECT * FROM stores';
        const result = await this.pool.query(sql);
        return result;
    }


    async getStoreById(storeId) {
        const sql = 'SELECT * FROM stores WHERE id = ?';
        const result = await this.pool.query(sql, [storeId]);
        return result;
    }
}

module.exports = StoreModel;