import express from "express";

import {getProducts,getCustomers} from "../controllers/client.js";

const router = express.Router();

router.get("./coustomers",getCustomers);
router.get("/products",getProducts);
export default router;