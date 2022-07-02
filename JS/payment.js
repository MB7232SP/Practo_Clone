var total = localStorage.getItem("totalprice");
var tag = document.querySelector("#total_amount");
tag.innerText =total;
document.querySelector("#submit_Card").addEventListener("click",Check_Card_Details);
function Check_Card_Details(){
    var cardNumber = document.querySelector("#card_Number").value;
    var name = document.querySelector("#Holder_Name").value;
    var expairy = document.querySelector("#Expaiy_Date").value;
    var cvv = document.querySelector("#CVV").value;
    if(cvv.length!=3){
        alert("wrong cvv");
    }
    else if(cardNumber.length!=16){
        alert("Wrong card Number")
    }else if(name==""){
       alert("Please Inter The Card Holder Name");
    }
    else{
        alert("Your Order Will be deleverd Soon");
        var arr = [];
        localStorage.setItem("cartitem",JSON.stringify(arr));
        window.location.href = "../HTML/thankyou.html"
        document.querySelector("#total_amount").innerText = "0";
        localStorage.setItem("totalprice",0);
    }

}