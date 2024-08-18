import { worker } from '../api/browser';
//api connection
if(import.meta.env.DEV){
  import('../api/browser').then(({worker})=>worker
  .start()
  .then(()=>fetch("/dishes"))
  .then((res)=>res.json())
  .then(
    (res)=>(menu= res))
);
} 
//variable declaration
let menu =[];
let allAddToCartButton=[];
let cart=[];
let allCartDeleteBtn=[];
let allDishes = document.getElementById("allDishes");
let content= " ";
let cartContent="";
let billTotal=[];
//function calls 
updateCounter();
displayAll(menu);
displayCastDishes();
//menu function
function displayAll(dishes){
  content="";
  dishes.forEach((dish)=>{
    let indiviDish=` <div class="dish">
        <img src=${dish.img} alt="sds" />
        <div class="dishOuter">
          <div class="dishInner">
            <h3 class="dishName">${dish.title}</h3>
            <h3 class="dishPrice">$${dish.price}</h3>
          </div>
          <p class="dishContent">
          ${dish.desc}
          </p>
          <button id=${dish.id} class="dishCartBtn">Add to cart</button>
        </div>
      </div>`;
      content += indiviDish;
    }
    );
    allDishes.innerHTML= content;
    getCartButton();
}
    
    //filter logic
    let allButtons = document.querySelectorAll("button");
    allButtons.forEach((button)=>addEventListener("click",(e)=>{
      filterItems(e.target.innerText);
    })
  );
  function filterItems(category){
    allDishes.innerHTML+="";
    if(category=="all"){
      displayAll(menu);
    }
    else{
    
    let filterdItems = menu.filter((dish)=>dish.category.toLowerCase()==category.toLowerCase());
    displayAll(filterdItems);
  }
}

//cart function
function updateCounter(){
  document.getElementById("cartButton").innerHTML="&#x1F6D2;" + cart.length;
}


function addDishTOCart(dishID){
  let flag=-1;
  menu.forEach((dish)=>{
    if(dish.id==dishID){
      cart.forEach((cartDish)=>{
        if(cartDish.id==dishID){
          cartDish.quantity+=1;
          flag=1;
        }
      });
      if(flag!=1){
        let tempDish ={...dish, quantity:1};
        cart.push(tempDish);
      }
    }
  });  
  updateCounter();
  displayCastDishes();
 
}
//function to display the cart and bil
function displayCastDishes(){
  cartContent="";
  let total=0;
  cart.forEach((dish)=>{
    let individualTotal = dish.price*dish.quantity;
    total+=individualTotal;
    let indivualDish =` <div class="cartDish">
        <img src="${dish.img}" alt="" />
        <h3>${dish.title}</h3>
        <h3>${dish.price}</h3>
        <h3>${dish.quantity}</h3>
        <p class="cartDelete" id=${dish.id}>Remove</P>
        <h3>Price : ${individualTotal}</h3>
      </div>`;
      cartContent+=indivualDish;
  });
  document.getElementById("cart").innerHTML= cartContent;
  calculateBill(total);
  getdeleteButton();
}
//function to calculate the grand total of the bill
function calculateBill(total){
  let setRecipet="";
  let finalbill=total*0.10+50;
  let displayrecipet=`<div>
      <h3>Price : $${total.toFixed(2)}</h3>
      <h3>Discount : 10%</h3>
      <h3>Delivery charges : $50</h3>
      <h3>Total Amount : $${finalbill.toFixed(2)}</h3>
      </div>`
      setRecipet+=displayrecipet;
      document.getElementById("billSection").innerHTML=setRecipet;
  // document.getElementById("billSection").textContent=`
  
  // Total bill : $${total.toFixed(2)}`;
}

//selete all delete button
function getdeleteButton(){
  allCartDeleteBtn = document.querySelectorAll(".cartDelete");
  allCartDeleteBtn.forEach((button)=>
  button.addEventListener("click",(e)=>{
    removeDishFromCart(e.target.id);
  }));
}
//function to remove dish form the cart
function removeDishFromCart(removeId){
  let flag=-1;
  let tempId=-1;
  for(let i=0;i<cart.length;i++){
    if(cart[i].id==removeId){
      flag=1;
      tempId=i;
    }
  }
  if(flag){
    cart.splice(tempId,1);
  }
  updateCounter();
  displayCastDishes();
}
// select all add to cart 
function getCartButton(){
  allAddToCartButton = document.querySelectorAll(".dishCartBtn");
  allAddToCartButton.forEach((button)=>
  button.addEventListener("click",(e)=>{
    addDishTOCart(e.target.id);
    
  }));
}

