const async = require('hbs/lib/async')
var db = require('../configs/dbconnect')
module.exports = {
    getAll:()=>{
        return new Promise((resolve,reject)=>{
            db.get(async(data) => {
                let arr = await data.collection("cryptoDetails").find().toArray()
                // sorting array
                arr.sort((a,b) => (a.slno > b.slno) ? 1 : ((b.slno > a.slno) ? -1 : 0)) 
                resolve(arr)
            })
        })
    },
    uploadData:(element)=>{
        db.get(async (data) => {
        // console.log("db.helper" + data)
        await data.collection("cryptoDetails").insertOne(element)
    })
    },
    updateData:(element)=>{
        db.get(async (data)=>{
            await data.collection("cryptoDetails").updateOne(
                {name:element.name},
                {
                    $set:{
                        last:element.last,
                        volume:element.volume,
                        sell:element.sell,
                        buy:element.buy
                    }
                },
                (err,docs)=>{
                    if (err){
                        console.log("Error while updating")
                        console.log(err)
                    }
                    // else{
                    //     console.log("Updated Docs : ", docs);
                    // }
                }
            )
        })
    }
}
