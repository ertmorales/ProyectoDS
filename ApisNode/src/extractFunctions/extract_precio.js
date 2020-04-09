"use strict"

const pool = require("../database/database");
const moment = require("moment");
const fs = require("fs");
const { generalDir } = require("../Global/routesfilesDirs")
const dateNow = require("../services/dateNow");

async function extract_precio(tableName, callback) {

    await pool.query("SELECT * FROM pos." + tableName, function(err, result) {
        if (err) {
            callback(1);
            return;
        } else {
            if (Object.entries(result).length === 0) {
                callback(2);
                return;
            } else {
                //crear archivo .json
                let fecha = dateNow();
                let name = "tbl-" + tableName + "-" + fecha + ".json"

                fs.writeFile(generalDir /*+ "/" + tableName + "/" */ + name, JSON.stringify(result), function(err) {
                    if (err) {
                        callback(3);
                        return;
                    } else {
                        callback(name);
                        return;
                    }
                });
            }
        }
    });
}

module.exports = extract_precio;