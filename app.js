let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
      
        id: 1,
        name: 'Modern Sofa Set',
        image: '1.PNG',
        price: 30000
    },
    {
        id: 2,
        name: 'Leather Sofa ',
        image: '2.PNG',
        price: 25000
    },
    {
        id: 3,
        name: 'Italian Sofa',
        image: '3.PNG',
        price: 22000
    },
    {
        id: 4,
        name: '4 Seater Teakwood Dining Table',
        image: '4.PNG',
        price: 12300
    },
    {
        id: 5,
        name: '6 Seater Modern Dining Table',
        image: '5.PNG',
        price: 32000
    },

    {
        id: 6,
        name: '6 Seater Circular Dining Table',
        image: '6.PNG',
        price: 20000
    },
    {
        id: 7,
        name: 'Beni Queen Size Bed With 2 Side Table',
        image: '7.PNG',
        price: 87000
    },
    {
        id: 8,
        name: 'Royal Queen Size Bed With 2 Side Tables ',
        image: '8.PNG',
        price: 13000
    },
    {
        id: 9,
        name: 'Turkish Classic Bedroom Set',
        image: '9.PNG',
        price: 28000
    }, 
      {
        id: 10,
        name: 'Executive Chair',
        image: '10.PNG',
        price: 22000
    },  
     {
        id: 11,
        name: 'Mid Back Eroganic Chair',
        image: '11.PNG',
        price: 12000
    },
    {
        id: 12,
        name: 'Adjustable chair',
        image: '12.PNG',
        price: 18000
    },
 
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// if(localStorage.getitem("token") == "yes"){
    
// }
// else{
//     window.location.href = "index.html.sectionsignup"
// }
if(localStorage.getItem("useremail") != "")
{
    var card = document.getElementById("adc-card")
    
}