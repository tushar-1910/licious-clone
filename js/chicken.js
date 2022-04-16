var cart_count = 0;
var total = 0;

function cartCount() {
    cart_count++
    
    var item_count = document.getElementById("item-count");
    item_count.innerText = cart_count;
}

function show() {
    var cart_div = document.getElementById("added-items");
    cart_div.style.display = "block";
    
}

function hide() {
    var cart_div = document.getElementById("added-items");
    
    cart_div.style.display = "none";
}

var detail = [{
    img: "images/chickenDiv5.jpeg",
    title: "Chicken Thigh - Boneless",
    desp: "Cut from the upper-leg, above the knee joint",
    weight: "Net wt: 1000gms",
    gross: "Gross:1026gms",
    price: "MRP: 295",
    button: "ADD TO CART",
    img2: "https://www.licious.in/img/default/express_delivery.svg",
    del: "Today in 90 min",
    rupees: 295
},
{
    img: "images/chickenDiv1.jpeg",
    title: "Chicken Curry Cut (Large Pcs)",
    desp: "Half a chicken cut to chunky pieces including two legs",
    weight: "Net wt: 100gms",
    gross: "Gross:126gms",
    price: "MRP: 495",
    button: "ADD TO CART",
    img2: "https://www.licious.in/img/default/express_delivery.svg",
    del: "Today in 90 min",
    rupees: 495

},
{
    img: "images/chickenDiv9.jpeg",
    title: "Chicken Curry Cut (Large Pcs)",
    desp: "Minced spicy chicken for a variety of dishes",
    weight: "Net wt: 1060gms",
    gross: "Gross:320gms",
    price: "MRP: 300",
    button: "ADD TO CART",
    img2: "https://www.licious.in/img/default/express_delivery.svg",
    del: "Today in 90 min",
    rupees: 300
}]

showData(detail)
function showData(detail) {
    let container = document.getElementById("topGrid")
    container.innerHTML="";

    detail.forEach(element => {
        let item = document.createElement("div")
        let headImage = document.createElement("img");
        headImage.src = element.img;

        let title = document.createElement('h4');
        title.innerText = element.title;

        let desp = document.createElement('p');
        desp.innerText = element.desp;

        let netWt = document.createElement('div');
        netWt.className = "netWt"

        let weight = document.createElement('h5');
        weight.innerText = element.weight;

        let gross = document.createElement('h5');
        gross.innerText = element.gross;

        netWt.append(weight, gross);

        let cartBtnWithPrice = document.createElement('div');
        cartBtnWithPrice.className = "cartBtnWithPrice";

        let price = document.createElement('h4');
        price.innerText = element.price;

        let button = document.createElement("button");
        button.innerText = element.button;
        button.className="btn"
        button.addEventListener("click",()=>{
            cartCount()
            sentDataToCart(element)
        })

        cartBtnWithPrice.append(price, button)

        let hr = document.createElement("hr");

        let delLogo = document.createElement('div');
        delLogo.className = "delLogo";

        let logoImage = document.createElement("img");
        logoImage.src = element.img2;

        let del = document.createElement('p');
        del.innerText = element.del;

        delLogo.append(logoImage, del)

        item.append(headImage, title, desp, netWt, cartBtnWithPrice, delLogo)
        container.append(item)

        








    });

    

}

       
function sentDataToCart(element){
    console.log(element)

    let addedToCartItems = document.getElementById("addedToCartItems");

    let item = document.createElement("div");
    item.className="item"

    let addedImg = document.createElement("img");
    addedImg.src = element.img;
    addedImg.className = "addedCartImg"

    let heading = document.createElement("p");
    heading.innerText = element.title;
    heading.className ="cartHead"

    let price = document.createElement("p");
    price.innerText = element.price;
    calTotal(element.rupees);
    price.className = "tot"

    item.append(addedImg,heading,price)
    addedToCartItems.append(item)
    

}

function calTotal(price){
total+=price 
document.getElementById("total").innerHTML=" Total Amount = " + total 
}

