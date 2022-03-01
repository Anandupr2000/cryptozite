var express = require('express');
var router = express.Router();
// const https = require('https');

const cryptoDetailsModel = require("../models/crypto");
// importing all fn in product-helpers as object
const dbHelper = require("../helpers/dbHelper")
const dataFetchHelper = require("../helpers/dataFetchHelper")
/* GET home page. */
router.get('/', async function(req, res, next) {
  let crypto = await dbHelper.getAll()
  res.render('users/body', { title: 'HodlInfo',c:crypto });
});

// for ajax response
router.get('/json',async (req,res)=>{
  data = await dbHelper.getAll()
  res.json(data)
})

// fetch 10 data from url and storing it to db
// router.get("/fetchData", 
async function updateData() {
  let data;
  try {
    data = await dataFetchHelper.fetchData()
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
        console.log("updating data");
        // const crypto = new cryptoDetailsModel(data[element]);
        // await crypto.save();
        // dbHelper.uploadData(data[element])
        dbHelper.updateData(data[element])
        i++
    }
  //   res.send(data);
  } catch (error) {
  //   res.status(500).send(error);
    console.log("Error occured while upading data")
    console.log(error)
  }
}
// )
// after each minute data get updated
setInterval(updateData,60000)

module.exports = router;
