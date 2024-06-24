import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";
import generalRoutes from "./routes/general.js";

//for data models
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
} from "./data/index.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);
app.use("/general", generalRoutes);

const PORT = process.env.PORT || 9000;
// console.log('MongoDB URI:', process.env.MONGO_URL);
// console.log('Server Port:', process.env.PORT);
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT : ${PORT}`));

    // Only first time to inject data

    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} Not Connected`));
