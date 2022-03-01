const https = require('https');

module.exports = {
    fetchData: () => {
        return new Promise((resolve,reject)=>{
            let url = "https://api.wazirx.com/api/v2/tickers";
            https.get(url, (req, res) => {
                let body = "";
                req.on("data", (chunk) => {
                    body += chunk;
                });
            req.on("end", async () => {
                try {
                    let data = JSON.parse(body);
                    // console.log(data)
                    resolve(data)
                } catch (error) {
                    console.error(error.message);
                }
            });
        }).on("error", (error) => {
            console.log("Error occurred")
            console.error(error.message);
        });
    })
    }
}