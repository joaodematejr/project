import { Router, Response } from "express";
const helloWorld = require("./controllers/helloWorld");

const routes = Router();

routes.get("/", helloWorld.index);

module.exports = routes;
