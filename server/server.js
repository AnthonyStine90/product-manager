const express = require("express");
const app = express();

const cors = require('cors');
app.use(express.json(), cors());

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require('./config/mongoose.config');
connectDB();

const productRouter = require('./routes/product.routes');
app.use('/api/products', productRouter)

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
