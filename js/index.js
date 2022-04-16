
var cartData = JSON.parse(localStorage.getItem('cartData')) || [];
var index = 0;
slider();

function slider() {

  var x = document.getElementsByClassName("slides");
  for ( var i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  setTimeout(slider, 2000); 
}
var bestSellerData= [
  
]

function displayData(bestSellerData) {
  document.querySelector('#bestSellers').innerHTML = '';
  bestSellerData.forEach(ele => {
    var box = document.createElement('div');
    box.setAttribute('class', 'box')
    box.style.borderRadius="20px";

   var imgDiv =document.createElement('div');
    var fimg = document.createElement('img');
    fimg.src = ele.foodImg;
    fimg.style.width="100%";
    fimg.style.height="230px";
    fimg.style.borderTopLeftRadius="20px";
    fimg.style.borderTopRightRadius="20px";
    imgDiv.append(fimg);

   var innerBox=document.createElement("div");

    var fname = document.createElement('h3');
    fname.textContent = ele.foodName;
    fname.style.fontFamily="Arial, Helvetica, sans-serif";
    fname.style.padding="10px";
    fname.style.marginTop="-10px";
    fname.style.marginBottom="-10px";
     
    var fDec=document.createElement('p');
    fDec.textContent=ele.foodDescription;
    
    var wetBox=document.createElement("div");
    wetBox.style.display="flex";
    wetBox.style.justifyContent='center';
    wetBox.style.verticalAlign="center";

    var newt=document.createElement("h4");
    newt.textContent=ele.netWeight;
    newt.style.fontSize='20px';

    var wtim=document.createElement("img");
    wtim.src=ele.weightImg;
   wtim.style.height='20px';

  //  justify-content: center;
  //  align-items: center;

    var gwt=document.createElement("h4");
    gwt.textContent=ele.grossWeight;
    gwt.style.fontSize='20px';

    wetBox.append(newt, wtim, gwt);

    var priceBox=document.createElement("div");
    priceBox.style.display="flex";
    priceBox.style.width="95%";
    priceBox.style.margin="auto";
    priceBox.style.justifyContent="space-between";
  
    var pri=document.createElement("h2");
    pri.textContent=ele.prcie;

    var cartBut=document.createElement("button");
    cartBut.setAttribute("id", "addToCart");
    cartBut.textContent="Add to cart";
    cartBut.style.backgroundColor="rgb(230, 46, 0)";
    cartBut.style.color="white";
    cartBut.style.verticalAlign="";
    cartBut.style.fontFamily="arial";
    cartBut.style.borderRadius="10px";
    cartBut.style.fontSize="18px";
    cartBut.style.height="40px";
    cartBut.style.border="none";

  
    cartBut.addEventListener('click', function() {
      cartData.push(ele);
        alert("item added successfuly to cart");
        localStorage.setItem('cartData', JSON.stringify(cartData));
      });

      priceBox.append(pri, cartBut);

      innerBox.append(fname, fDec, wetBox, priceBox);

      var deliTime=document.createElement('div');
       deliTime.style.display="flex";
       deliTime.style.borderTop="2px rgb(230, 230, 230)";
       deliTime.style.justifyContent="center";


       var delim=document.createElement("img");
       delim.src=ele.deliveryTimeImg;

       var tm=document.createElement("h3");
       tm.textContent=ele.deliveryTime;
       tm.style.color="gray";
       tm.style.fontSize="16px";

       deliTime.append(delim, tm);

       box.append(imgDiv, innerBox, deliTime);
       document.querySelector("#bestSellers").append(box);
  });
}
displayData(bestSellerData);

//new div

var boneLessCutsData= [
  
]

function displayData(boneLessCutsData) {
  document.querySelector('#bonelessCuts').innerHTML = '';
  boneLessCutsData.forEach(ele => {
    var box = document.createElement('div');
    box.setAttribute('class', 'box')
    box.style.borderRadius="20px";

   var imgDiv =document.createElement('div');
    var fimg = document.createElement('img');
    fimg.src = ele.foodImg;
    fimg.style.width="100%";
    fimg.style.height="230px";
    fimg.style.borderTopLeftRadius="20px";
    fimg.style.borderTopRightRadius="20px";
    imgDiv.append(fimg);

   var innerBox=document.createElement("div");

    var fname = document.createElement('h3');
    fname.textContent = ele.foodName;
    fname.style.fontFamily="Arial, Helvetica, sans-serif";
    fname.style.padding="10px";
    fname.style.marginTop="-10px";
    fname.style.marginBottom="-10px";
     
    var fDec=document.createElement('p');
    fDec.textContent=ele.foodDescription;

    var wetBox=document.createElement("div");
    wetBox.style.display="flex";
    wetBox.style.justifyContent='center';
    wetBox.style.verticalAlign="center";

    var newt=document.createElement("h4");
    newt.textContent=ele.netWeight;
    newt.style.fontSize='20px';

    var wtim=document.createElement("img");
    wtim.src=ele.weightImg;
   wtim.style.height='20px';

    var gwt=document.createElement("h4");
    gwt.textContent=ele.grossWeight;
    gwt.style.fontSize='20px';

    wetBox.append(newt, wtim, gwt);

    var priceBox=document.createElement("div");
    priceBox.style.display="flex";
    priceBox.style.width="95%";
    priceBox.style.margin="auto";
    priceBox.style.justifyContent="space-between";
  
    var pri=document.createElement("h2");
    pri.textContent=ele.prcie;

    var cartBut=document.createElement("button");
    cartBut.textContent="Add to cart";
    cartBut.style.backgroundColor="rgb(230, 46, 0)";
    cartBut.style.color="white";
    cartBut.style.verticalAlign="";
    cartBut.style.fontFamily="arial";
    cartBut.style.borderRadius="10px";
    cartBut.style.fontSize="18px";
    cartBut.style.height="40px";
    cartBut.style.border="none";

  
    cartBut.addEventListener('click', function() {
      cartData.push(ele);
        alert("item added successfuly to cart");
        localStorage.setItem('cartData', JSON.stringify(ele));
      });

      priceBox.append(pri, cartBut);

      innerBox.append(fname, fDec, wetBox, priceBox);

      var deliTime=document.createElement('div');
       deliTime.style.display="flex";
       deliTime.style.borderTop="2px rgb(230, 230, 230)";
       deliTime.style.justifyContent="center";


       var delim=document.createElement("img");
       delim.src=ele.deliveryTimeImg;

       var tm=document.createElement("h3");
       tm.textContent=ele.deliveryTime;
       tm.style.color="gray";
       tm.style.fontSize="16px";

       deliTime.append(delim, tm);

       box.append(imgDiv, innerBox, deliTime);
       document.querySelector("#bestSellers").append(box);
  });
}
displayData(boneLessCutsData);