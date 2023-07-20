import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import homeRoutes from "./routes/home.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// Import Data
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataAffiliateStat,
  dataOverallStat,
} from "./data/index.js";

//Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/client", clientRoutes);
app.use("/home", homeRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MONGOOSE Setup
const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

    // ! Insert data //! # Do not uncomment the below lines until you want to insert data to the DB. # Once data insertion in the DB is done, comment those lines again to avoid data duplication.
    // User.insertMany(dataUser); //inset data only once
    // Product.insertMany(dataProduct); //inset data only once
    // ProductStat.insertMany(dataProductStat); //inset data only once
    // OverallStat.insertMany(dataOverallStat); //inset data only once
    // AffiliateStat.insertMany(dataAffiliateStat); //inset data only once
  })
  .catch((err) =>
    console.log(`Error: ${err}.
  Server could not connect`)
  );
