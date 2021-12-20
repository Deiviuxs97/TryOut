const express = require("express");
const app = express();
const cors = require("cors");
// const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const CommissionCalculation = require("./controllers/CommissionCalculation");
const requestExchangeRates = require("./services/requestExchangeRates");


app.use("/calculateCommission", requestExchangeRates, CommissionCalculation)

app.get("/", (req, res) => {
    res.send("Working!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})