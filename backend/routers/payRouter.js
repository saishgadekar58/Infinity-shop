import express from "express";
const payRouter = express.Router();

payRouter.get("/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

export default payRouter;
