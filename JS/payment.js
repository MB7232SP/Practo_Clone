var total = localStorage.getItem("totalprice");
var tag = document.querySelector("#total_amount");
if(total=="0"){
    var h1 = document.createElement("h1");
    h1.innerText = "Please First Add to cart Whatever You want to buy";

    document.querySelector("#payment_details").innerText = "";
    document.querySelector("#payment_details").append(h1);
}else{
    tag.innerText =total;
}
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
        alert("ThankYou for shopping with us");
        var arr = [];
        localStorage.setItem("cartitem",JSON.stringify(arr));
        var link = document.createElement("a");
        link.setAttribute("src","../HTML/product.html");

        document.querySelector(".option2").innerText = "Thankyou Your Order Will be deleverd Soon ";
        
        document.querySelector("#total_amount").innerText = "0";
        localStorage.setItem("totalprice",0);
    }

}