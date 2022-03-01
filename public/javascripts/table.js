let l=0;
function syncTableData(){
    $.ajax({
        url:"/json",
        method:"get",
        success:(response)=>{
            // console.log("Ajax succeeded")
            console.log(l)
            for(var i=0;i<10;i++)
            document.getElementById(response[i]._id).innerHTML = "<td class='cell1'>"+response[i].slno
                                                                +"</td><td>"+response[i].name
                                                                +"</td><td>₹ "+response[i].last
                                                                +"</td><td>₹ "+response[i].buy
                                                                +" / ₹ "+response[i].sell
                                                                +"</td><td>"+response[i].volume
                                                                +"</td><td>"+response[i].base_unit
                                                                +"</td>"
            l++
        },
        error:(response)=>{
            console.log("Ajax failed")
            console.log(response)
        }
    })
}
setInterval(syncTableData,60000)