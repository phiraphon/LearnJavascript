
function totalPay(){
    var price = document.getElementById("price").value;
    var num = document.getElementById("num").value;
    var total = Number(document.getElementById("total").value);
    var value = price * num;
    total += value;   
    document.getElementById("price").value = "";
    document.getElementById("num").value = "";
    document.getElementById("total").value = total;
}

function changeMoney(){
    var pay = document.getElementById("pay").value;
    var total = document.getElementById("total").value;
    var change = pay - total;
    document.getElementById("change").value = change;
}

console.log("test");
