var medicine = [
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/bevon-capsule-15-s_8084de62-dfe8-400a-abe8-ccc3906ca323.JPG",
        name: "Bevon Capsule",
        size: "15 CAPSULES",
        price: "130.05",
        quantity: "1",
        mrp: "₹132.7",
        discount: "2% off",
        cat: "15 CAPSULES ( 15 / STRIP )"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/myokramp-tablet-10-s_2a9484d6-92da-4ae3-9e4e-582aec7d184c.JPG",
        name: "MyoKramp Tablet 10's",
        size: "10 TABLET",
        price: "146.02",
        quantity: "1",
        mrp:"₹149",
        discount: "2% off",
        cat: "10 TABLET ( 10 / STRIP )"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/shelcal-500mg-tablet-15-s_ef3c4e71-3c09-4132-85aa-be7fa6cf9cbf.JPG",
        name: "Shelcal-500 Tablet",
        size: "15 TABLET",
        price: "106.53",
        quantity: "1",
        mrp:"₹108.7",
        discount: "2% off",
        cat: "15 TABLET ( 15 / STRIP )"  
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/zincovit-tablet-15-s_b65a0677-01fc-4490-aa89-d357ecab7166.JPG",
        name: "Zincovit Tablet 15's",
        size: "15 TABLET",
        price: "102.9",
        quantity: "1",
        mrp:"₹105",
        discount: "2% off",
        cat: "15 TABLET ( 15 / STRIP )"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/neurobion-forte-tablet-immunity-booster-30-s_21a91fb7-e499-441f-809a-df655f3abcd2.JPG",
        name: "Neurobion Forte Tablet 30's",
        size: "30 TABLET",
        price: "34.01",
        quantity: "1",
        mrp:"₹34.7",
        discount: "2% off",
        cat: "30 TABLET ( 30 / STRIP )"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/dewderm-lotion-200ml_71d43c0b-e1bf-4aa7-850b-dd76050ec968.JPG",
        name: "Dewderm Moisturising Lotion 200 gm",
        size: "200 GM",
        price: "426.3",
        quantity: "1",
        mrp:"₹435",
        discount: "2% off",
        cat: "200 GM LOTION"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/nutrihub-gold-soft-gelatin-capsules-30-s_ad9ea45e-dbe9-4fac-8794-2150d4924062.JPG",
        name: "Nutrihub Gold Soft Gelatin Capsule",
        size: "30 CAPSULES",
        price: "2058",
        quantity: "1",
        mrp:"₹2100",
        discount: "2% off",
        cat: "30 CAPSULES ( 30 / BOTTLE )"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/nano-leo-capsules-15-s_ceac4e29-38fa-4563-9f44-e5a98de816c3.JPG",
        name: "Nano-Leo Capsule 15'S",
        size: "15 CAPSULES",
        price: "735",
        quantity: "1",
        mrp:"₹750",
        discount: "2% off",
        cat: "15 CAPSULES ( 15 / STRIP )"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/tentex-royal-capsule-sexual-wellness-10-s_d8d081a2-6db5-466d-8647-d5ce6a9ae457.JPG",
        name: "Himalaya Tentex Royal Capsule 10's",
        size: "10 CAPSULES",
        price: "196",
        quantity: "1",
        mrp:"₹200",
        discount: "2% off",
        cat: "10 CAPSULES ( 10 / STRIP )"
    }
]
var cartarr = JSON.parse(localStorage.getItem("cartitem"))||[];
document.querySelector("#cartvalue").innerText = cartarr.length;
display_products(medicine);
function display_products(product){
    product.map(function(el){
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src",el.emage_url);
        var name = document.createElement("p");
        name.innerText = el.name;
        var price = document.createElement("h2");
        price.innerText = "₹"+el.price;
        var catagry = document.createElement("button");
        catagry.setAttribute("class","type");
        catagry.innerHTML = "Medicine";
        var addtocart = document.createElement("button");
        addtocart.setAttribute("class","addtocart_button");
        addtocart.innerText = "ADD"
        addtocart.addEventListener("click",function(){
            add_to_cart_arr(el,addtocart);
        })
        var div2 = document.createElement("div");
        div2.setAttribute("class","tow_button");
        div2.append(catagry,addtocart);

        div.append(img,name,price,div2);
        document.querySelector("#displayproducts").append(div);
    })
}
function add_to_cart_arr(el,addtocart){
    var cartarr = JSON.parse(localStorage.getItem("cartitem"))||[];
    var check = true;
    for(var i = 0; i<cartarr.length; i++){
        if(el.name ==cartarr[i].name){
            alert("Already Added");
            check = false;
            break;
        }
    }
    if(check==true){
        cartarr.push(el);
    }
    document.querySelector("#cartvalue").innerText = cartarr.length;
    localStorage.setItem("cartitem",JSON.stringify(cartarr));

}