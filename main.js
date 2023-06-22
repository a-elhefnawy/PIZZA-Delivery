//------------PAGINATION------------------//
let product=[
    {
        id:1,
        image:'images/1.jpg',
        title:'BBQ Chicken',
        price:100
    },
    {
        id:1,
        image:'images/2.jpeg',
        title:'Pepperoni',
        price:110
    },
    {
        id:1,
        image:'images/3.jpeg',
        title:'Margrieta',
        price:90
    },
    {
        id:1,
        image:'images/4.jpeg',
        title:'Meat Lovers',
        price:120
    },
    {
        id:2,
        image:'images/5.jpg',
        title:'Hawaiian',
        price:115
    },
    {
        id:2,
        image:'images/6.jpeg',
        title:'Chicken Crust',
        price:130 
    },
    {
        id:2,
        image:'images/7.jpeg',
        title:'Sausage & Tomato pizza',
        price:140 
    },
    {
        id:2,
        image:'images/8.jpeg',
        title:'Pastrami',
        price:125 
    }
];

let categories=[...new Set(product.map((item)=>{return item}))];
let i=0;
let displayItem=(items)=>{
    document.getElementById("row").innerHTML=items.map((item)=>{
        var{image,title,price}=item;
        return(`<div class="col-lg-3 col-md-4 col-sm-6 mb-2">
                    <div class="card" style="width: 18rem;">
                        <img src="${image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h3 class="card-text">${price}E.P</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a onclick="addtocart(`+(i++)+`)" class="bttn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>`)
    }).join('');
};

let filterFirstCategories=categories.filter(item);
function item(value){
    if(value.id==1){
        return(value.id)
    }
}

displayItem(filterFirstCategories);

let btns=[
    {
        id:1,
        name:'<<'
    },
    {
        id:1,
        name:'1'
    },
    {
        id:2,
        name:'2'
    },
    {
        id:2,
        name:'>>'
    }
];

let filters=[... new Set(btns.map((btn)=>{return btn}))];

document.getElementById("btns").innerHTML=filters.map((btn)=>{
    var{name, id}=btn;
    return(`<li class="page-item"><a class="page-link" href="" onclick='filterItems(`+(id)+`); event.preventDefault();'>${name}</a></li>`)
}).join('');

let filterItems=(a)=>{
    let filterCategories =categories.filter(item);
    function item(value){
        if(value.id==a){
            return(value.id)
        }
    }
    displayItem(filterCategories);
};
//////////////////////////////////////////////////////////////////////
////////////////////orderlist/////////////////////////////////////
let cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displayOrder();
}
function deleteitem(a){
    cart.splice(a,1);
    displayOrder();
}


function displayOrder(){
    let j=0;
    let total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById("order-item").innerHTML="you haven't ordered yet"
    }else{
        document.getElementById("order-item").innerHTML=cart.map((items)=>
        {
            var {image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML=total+"E.P";
            return(
                `<div class='cart-item'>
                <div class=row-img>
                <img class='rowimg' src="${image}">
                </div>
                <p style='font-size:15px;'>${title}</p>
                <h2 style='font-size:20px;'>${price}E.P</h2>
                <button onclick='deleteItem(`+(j++)+`)' class="del"><i class='fa-solid fa-trash'></i></button>
                </div>`
            )
        }).join('');
    }

}

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
"use strict";
var nameAlert = document.getElementById("guestName");
var emailAlert = document.getElementById("guestEmail");
var phoneNumAlert = document.getElementById("guestPhoneNum");
var messageAlert = document.getElementById("guestMessage");
var validateName = /[a-zA-Z]{4,}$/;
var validateEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
var validatePhoneNum = /(011|010|012)+[0-9]{8,}$/;

function validate(e){
  var valid=true;
  if (!validateName.test(e.target.name.value)) {
    valid = false;
    nameAlert.innerText = "Name must at least 4 chars";
  } else {
    nameAlert.innerText = "";
  }
  if (!validateEmail.test(e.target.email.value)) {
    valid = false;
    emailAlert.innerText = "Email form is not valid";
  } else {
    emailAlert.innerText = "";
  }
  if (!validatePhoneNum.test(e.target.phoneNum.value)) {
    valid = false;
    phoneNumAlert.innerText = "Phone number must be at least 11 numbers";
  } else {
    phoneNumAlert.innerText = "";
  }
  if (e.target.message.value.length == 0) {
    valid=false;
    messageAlert.innerText = "Message is required";
  } else {
    messageAlert.innerText = "";
  }

  if (!valid) {
    e.preventDefault();
  }
}

/////////////////////////////////////////////////////////////////////

