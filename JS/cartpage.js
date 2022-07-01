var cartarr = JSON.parse(localStorage.getItem("cartitem"))||[];
display_products(cartarr);



function display_products(product){
    document.querySelector("#totalitem").innerText = "";
    if(product.length==0){
        var img = document.createElement("img");
        img.setAttribute("class","emptyemage");
        img.setAttribute("src","https://www.practostatic.com/ecommerce-assets/static/media/EmptyCart.a7ae30f4.svg");
        var h3 = document.createElement("h3");
        h3.innerText = "Your cart is empty";
        document.querySelector("#totalitem").append(img,h3);
    }
    else{
        product.map(function(el,index){
            var maindiv = document.createElement("div");
            maindiv.setAttribute("class","totalitemdiv");
            var img = document.createElement("img");
            img.setAttribute("src",el.emage_url);
            var name = document.createElement("h3");
            name.innerText = el.name;
            var size = document.createElement("p");
            size.innerText = el.size;
            var p1 = document.createElement("p");
            p1.innerText = "GLAXOSMITHKLINE LTD";
            var div2 = document.createElement("div");
            div2.append(name,p1,size);
            var div1 = document.createElement("div");
            div1.append(img);
            var subdiv1 = document.createElement("div");
            subdiv1.setAttribute("class","subdiv1");
            subdiv1.append(div1,div2);
            // subdiv1.setAttribute("class","product_emageAnd_detail");
            var subdiv2 = document.createElement("div");
            var price = document.createElement("h3");
            price.innerText = "₹ "+el.price;
            var button_div = document.createElement("div");
            button_div.setAttribute("class","buttondiv");
            var reduce =  document.createElement("button");
            reduce.addEventListener("click",function(){
                reduceitem(index,product);
            })
            reduce.innerText = "-"
            var increes = document.createElement("button");
            increes.addEventListener("click",function(){
                increes_item(index,product);
            })
            increes.innerText = "+";
            var qvantity = document.createElement("p");
            qvantity.innerText = el.quantity;
            button_div.append(reduce,qvantity,increes);
            subdiv2.append(price,button_div);
            var hr = document.createElement("hr");
            maindiv.append(subdiv1,subdiv2);

            document.querySelector("#totalitem").append(maindiv,hr);
        })
    }
    document.querySelector("#itemNumber").innerText = "My Cart: "+product.length+" item";
    totalprice(product);
}
function totalprice(el){
    var total = el.reduce(function(ac,num){
        return ac+(parseFloat(num.price)*parseFloat(num.quantity));
    },0);
    document.querySelector("#totalprice").innerText = total;
    localStorage.setItem("totalprice",total);
}
function reduceitem(index , product){
    var num = parseInt(product[index].quantity);
    if(num<=1){
     product.splice(index,1);
    }
    else{
       product[index].quantity = num-1;
    }
    localStorage.setItem("cartitem",JSON.stringify(product));
    display_products(product);
}
function increes_item(index,product){
    var num = parseInt(product[index].quantity);
    product[index].quantity = num+1;
    localStorage.setItem("cartitem",JSON.stringify(product));
    display_products(product);
}
document.querySelector(".check").addEventListener("click",gotopaymentpage)
function gotopaymentpage(){
    var num = parseInt(localStorage.getItem("totalprice"));
      if(num>1){
         window.location.href = "..//HTML/payment.html"
      }else{
          alert("Add Product First");
      }
}