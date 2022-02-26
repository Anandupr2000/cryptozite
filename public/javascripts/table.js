var table = document.getElementById("table")
$.ajax({
    url:"https://api.wazirx.com/api/v2/tickers",
    method:"get",
    dataType: 'jsonp',
    cors: true ,
    contentType:'application/json',
    secure: true,
    headers: {
    'Access-Control-Allow-Origin': '*',
    },
    success:(response)=>{
        console.log("Ajax succeeded")
        console.log(response)
    },
    error:(response)=>{
        console.log("Ajax failed")
        console.log(response)
    }
})