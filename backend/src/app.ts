import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

const swaggerFile = require('./doc/swagger_output.json')
const routes = require('./routes');
const app = express();

app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

module.exports = app;
