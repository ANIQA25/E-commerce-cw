// open and close cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
const buyNow=document.querySelector(".btn-buy");
var form1=document.querySelector(".form-1");
var form2=document.querySelector(".form-2");
const nextBtn=document.querySelector(".next-btn");
const backBtn=document.querySelector(".back-btn");
const confirmBtn=document.querySelector(".submit-btn");
var error=document.getElementById("error-msg");

function validateMessage(){

    var address=document.getElementById("adr").value;
    var zip=document.getElementById("post").value;
    var country=document.getElementById("country").value;
    var email=document.getElementById("email").value;

    if(address===""||zip===""||country===""||email===""){
        return true;
    }
}

var alertfinal=document.querySelector(".alertbox")

confirmBtn.addEventListener("click",function(){
    form2.style.display="none";
    alertfinal.style.display="block";

});

nextBtn.addEventListener("click",function(){
    
    if(validateMessage()===true){
        error.innerHTML="Please fill in the fields marked with a *";

    }else{
        form1.style.display="none";
        form2.style.display="block";
    }
});

backBtn.addEventListener("click",function(){
    form2.style.display="none";
    form1.style.display="block";
});

function auto(){
    var autoaddress=document.getElementById("adr").value;
    document.getElementById("autofill").innerHTML=autoaddress;
    var autoemail=document.getElementById("email").value;
    document.getElementById("autofill-1").innerHTML=autoemail;
}

  

buyNow.addEventListener("click",()=>{
    let buypage=document.querySelector(".shop.container");
    buypage.style.display="none";
    let nav=document.querySelector(".nav.container");
    nav.style.display="none";
    let formpart1=document.getElementById("section1form");
    formpart1.style.display="block";
});

cartIcon.addEventListener("click", ()=>{
    cart.classList.add("active");
});

closeCart.addEventListener("click", ()=>{
    cart.classList.remove("active");
});

// start when the document is ready
if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded',start);

}else{
    start();
}

// start
function start(){
    addEvents();
}

// update and rerender
function update(){
    addEvents();
    updateTotal();
}

// add events
function addEvents(){
    //remove items
    let cartRemove_btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach(btn =>{
        btn.addEventListener("click", handle_removeCartItem);

    });
    // change item quantity
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input=>{
        input.addEventListener("change", handle_changeItemQuantity);
    });
    //add item to cart
    let addCart_btns=document.querySelectorAll(".addtocart_btn");
    addCart_btns.forEach(btn=>{
        btn.addEventListener("click",handle_addCartItem);
    });
    
}

let itemsAdded=[]
// Handle event functions
function handle_removeCartItem(){
    this.parentElement.remove();

    update();
}

function handle_changeItemQuantity(){
    if (isNaN(this.value)||this.value<1){
        this.value=1;
    }
    this.value=Math.floor(this.value); //keeps it in integer

    update();
}

function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".price").innerHTML;
    let imgSrc=product.querySelector(".product-img").src;
    console.log(title,price,imgSrc);
    let newToAdd = {
        title,
        price,
        imgSrc,
    };
    // add product to cart
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode  = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();

}

// update
function updateTotal(){
    let cartBoxes=document.querySelectorAll(".cart-box");
    let totalElement = cart.querySelector(".total-price");
    let total=0;
    cartBoxes.forEach((cartBox)=> {
        let priceElement = cartBox.querySelector(".cart-price");
        let price=parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity =cartBox.querySelector(".cart-quantity").value;
        total+= price*quantity;
    });
    total=total.toFixed(2);
    totalElement.innerHTML = "$"+total;
}

// html components
function CartBoxComponent(title, price, imgSrc){
    return`
        <div class="cart-box">
            <img src= ${imgSrc} alt="Denim Jeans" style="height:150px" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                        
                       
                <i class="bx bxs-trash-alt cart-remove"></i>
                        
        </div>`;
}