const MongoClient = require('mongodb').MongoClient;
const fs = require("fs");
const url = process.env.PAIMONNODE_DB_URI;
const client = new MongoClient(url);
(async()=>{
    await client.connect();
    let res = await client.db("paimonnode").collection("res").find({"symbol": "pmw"}).toArray()
    fs.writeFileSync("./clash.yaml",res[0]['sub-clash'])
    fs.writeFileSync("./base64",res[0]['sub-v2'])
    setTimeout(process.exit(0),330000)
