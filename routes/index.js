var express = require('express');
var router = express.Router();
const https = require('https');

const cryptoDetailsModel = require("../models/crypto");
// importing all fn in product-helpers as object
const dbHelper = require("../helpers/dbHelper")

/* GET home page. */
router.get('/', async function(req, res, next) {
  let crypto = await dbHelper.getAll()
  res.render('users/body', { title: 'HodlInfo',c:crypto });
});
// fetch 10 data from url and storing it to db
router.get("/fetchData", async (req, res) => {
  let data;
  try {
    let url = "https://api.wazirx.com/api/v2/tickers";
    https.get(url,(req,res) => {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end",async () => {
        try {
          data = JSON.parse(body);
          var i=1
            for(var element in data){
              if(i==11) break
              data[element]["slno"] = i
              delete data[element]["quote_unit"]
              delete data[element]["low"]
              delete data[element]["high"]
              delete data[element]["type"]
              delete data[element]["open"]
              delete data[element]["at"]
              console.log(data[element]);
              // const crypto = new cryptoDetailsModel(data[element]);
              // await crypto.save();
              dbHelper.uploadData(data[element])
              i++
            }
        } catch (error) {
          console.error(error.message);
        };
    });

    }).on("error", (error) => {
      console.error(error.message);
    });
    res.send(crypto);
  } catch (error) {
    res.status(500).send(error);
  }
})
router.get('/json',(req,res)=>{
  res.json([{"response":true}])
})
module.exports = router;
