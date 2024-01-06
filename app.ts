import {connect} from "mongoose";
import {signup, login} from "./src/controllers/authController";
import {addClothes, deleteAllClothes, editClothes, getFinalPriceClothes, deleteClothes, getClothes} from "./src/controllers/clothesController";

const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./src/routes/authRoutes');
const clothesRoutes = require('./src/routes/clothesRoutes');
const jwtMiddleware = require('./src/middlware/jwtMiddleware');
const logMiddleware = require('./src/middlware/logMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const PORT = process.env.port;

connect("mongodb://db:27017").then();


app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/auth', logMiddleware, authRoutes);
app.use('/clothes', logMiddleware, jwtMiddleware, clothesRoutes);

app.post('/signup', signup);
app.post('/login', login);

app.post('/add-clothes', addClothes);
app.get('/get-clothes/:id', getClothes);
app.get('/get-final-price/:id', getFinalPriceClothes);
app.delete('/delete-clothes/:id', deleteClothes);
app.delete('/delete-all-clothes', deleteAllClothes);
app.patch('/edit-clothes/:id', editClothes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
