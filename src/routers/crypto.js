const express = require("express");
const router = new express.Router();
const Cryptos = require("../models/cryptos");

router.get("/", (req, res) => {
  res.render("index");
});

//get the indivisual student data using base_unit
router.get("/:base_unit", async (req, res) => {
  try {
    const base_unit = req.params.base_unit;
    if (base_unit === "btc") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("btc", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "xrp") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("xrp", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "eth") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("eth", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "trx") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("trx", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "eos") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("eos", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "zil") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("zil", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "bat") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("bat", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "zrx") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("zrx", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "req") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("req", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else if (base_unit === "nuls") {
      const cryptoData = await Cryptos.findOne({ base_unit: base_unit });
      res.render("nuls", {
        base_unit: cryptoData.base_unit,
        quote_unit: cryptoData.quote_unit,
        low: cryptoData.low,
        high: cryptoData.high,
        last: cryptoData.last,
        type: cryptoData.type,
        open: cryptoData.open,
        volume: cryptoData.volume,
        sell: cryptoData.sell,
        buy: cryptoData.buy,
        at: cryptoData.at,
        name: cryptoData.name,
      });
    } else {
      res.send("404 page not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//Storing top 10 data in database
router.post("/", async (req, res) => {
  const api = "https://api.wazirx.com/api/v2/tickers";
  try {
    let data = await fetch(api);
    let realData = await data.json();
    realData = Object.values(realData);
    for (let i = 0; i < 10; i++) {
      const cryptoData = new Cryptos(realData[i]);
      await cryptoData.save();
    }
    res.send("Stored successfully");
  } catch (error) {
    console.log("data does not fetch from api");
  }
});

module.exports = router;
