import express from "express";

import {
  getProducts,
  getCustomers,
  getTransactions,
} from "../controllers/client.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.get("/products", getProducts);
router.get("/transactions", getTransactions);
export default router;
