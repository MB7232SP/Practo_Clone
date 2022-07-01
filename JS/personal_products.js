var products = [
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/oilatum-100gm-soap-1-s_2e023a5e-d853-42db-ab55-d9dde9c98231.JPG",
        name: "Oilatum Soap Bar 100 g",
        size: "100 g",
        price: "179.00",
        quantity: "1",
        cat: "100GM Personal care"
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/dermadew-lite-75gm-soap-1-s_f2f68d00-48bc-438d-9e24-d43101084bf7.JPG",
        name: "Dermadew Lite Soap",
        size: "L",
        price: "175.00",
        quantity: "1",
        cat: "75 GM Personal care"  
    },
    {
        emage_url: "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
        name: "Apollo Pharmacy Cucumber Face Wash 75 ml",
        size: "75 ML",
        price: "149.00",
        quantity: "1",
        cat: "75 ML Personal care" 
    },
    { 
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/figaro-olive-oil-500ml_3790ac71-3810-4c2d-98c2-cf26a6b03504.JPG",
        name: "Figaro Olive Oil 500 ml",
        size: "500 ML",
        price: "875.00",
        quantity: "1",
        cat: "500 ML OIL" 
    },
    {
        emage_url: "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
        name: "Sebamed Baby Lotion 100 ml",
        size: "100 ML",
        price: "491.00",
        quantity: "1",
        cat: "100 ML LOTION" 
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/elastoderm-50gm-cream-1-s_f601c7eb-da4b-4fe7-8b73-95bfc5dab3e4.JPG",
        name: "Elastoderm Cream 50 g",
        size: "50 GM",
        price: "477.00",
        quantity: "1",
        cat: "1 Personal Care" 
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/safi-syrup-200ml_0575040a-3c79-48fd-861a-d344615bbedd.JPG",
        name: "Safi Natural Blood Purifier Syrup 200 ml",
        size: "200 ML",
        price: "100.00",
        quantity: "1",
        cat: "200 ML SYRUP" 
    },
    {
        emage_url: "https://www.practostatic.com/practopedia-images/v3/res-150/cetaphil-os-oily-skin-cleanser-125ml_f8f27d2f-74e5-4072-b039-91407a15d124.JPG",
        name: "Cetaphil Oily Skin Cleanser",
        size: "100 GM",
        price: "500.00",
        quantity: "1",
        cat: "100 GM CLEANSER" 
    },
    {
        emage_url: "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
        name: "Cetaphil Oily Skin Cleanser",
        size: "150 ML",
        price: "166.00",
        quantity: "1",
        cat: "150 ML FACEWASH"
    }
]
var cartarr = JSON.parse(localStorage.getItem("cartitem"))||[];
document.querySelector("#cartvalue").innerText = cartarr.length;
display_products(products);
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
        catagry.innerHTML = "Personal Care";
        var addtocart = document.createElement("button");
        addtocart.setAttribute("class","addtocart_button");
        addtocart.innerText = "ADD"
        addtocart.addEventListener("click",function(){
            add_to_cart_arr(el,addtocart);
        })
        var div2 = document.createElement("div");
        div2.setAttribute("class","tow_button");
        div2.append(catagry,addtocart);
        // var lin =  document.createElement("hr");
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