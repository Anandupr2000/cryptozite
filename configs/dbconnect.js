const { resolve, reject } = require("promise");

const MongoClient = require("mongodb").MongoClient;

const state ={db:null}
let connection = false
uri = "mongodb+srv://anonymous_:123@cluster0.7xuld.mongodb.net/crypto?retryWrites=true&w=majority";
const dbname = 'crypto'

const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

function getdb(done){
    return new Promise((resolve,reject)=>{
        mongo.connect().then(()=>{
            console.log("sucess")
            resolve(done(mongo.db(dbname)))
            }
        )
    })
}
module.exports.get = async(done)=>{
    await getdb((data)=>{
        done(data)
    })
}