"use strict"

const express = require("express");
const getSyncController = require("../controllers/getSync.controller");
const setSyncController = require("../controllers/setSync.controller");
const api = express.Router();

api.get("/getData", getSyncController.main);
api.post("/setData", setSyncController.main);

module.exports = api;