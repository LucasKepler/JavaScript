const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//Global Variables
var storeItem = [];
var cartItem = [];
var i = 0;

//CONSTRUCTORS:
/* 
Constructor for structuring the item data in the online store 
*/
function Store(id, name, price, quantity, maximum, category, shipping, reviews, description, image) {
    this.productId = id;
    this.productName = name;
    this.productPrice = price;
    this.quantityAvailable = quantity;
    this.maxQuantity = maximum;
    this.productCategory = category;
    this.shippingCost = shipping;
    this.reviews = reviews;
    this.productDescription = description;
    this.image = image;
}

/*
Constructor for storing relevant item data for itens in the cart
*/
function Cart(id, price, quantity, shipping) {
    this.productId = id;
    this.productPrice = price;
    this.quantityCart = quantity;
    this.shippingCost = shipping;
}

/*
Constructor for storing a review and rating
*/
function Review(review, rating) {
    this.productReview = review;
    this.productRating = rating;
}

//FUNCTIONS:
/*
Function that will be called when the page loads
*/
function inicialDisplay() {
    let todayDate = new Date();
    document.write(todayDate.getHours() + ":", todayDate.getMinutes() + "-", todayDate.getDay() + "/", todayDate.getMonth() + "/", todayDate.getFullYear());
    storeItem.push(new Store("pd01", "Kit Copa Do Mundo Torcedor", 16.99, 100, 4, "World_cup", 3,/*[review]*/"Para se divertir ainda mais nos jogos da nossa seleção brasileira temos o KIT Torcedor, o Kit vai tornar os jogos e a confraternização com os amigos ainda mais divertida."/*image*/));
    storeItem.push(new Store("pd02", "Pulseiras Copa Do Mundo brasil", 7.50, 68, 4, "World_cup", 3,/*[review]*/"O Acessório que faltava para compor seu look de torcida, e te deixar ainda mais a carater para a copa do mundo."/*image*/));
    storeItem.push(new Store("pd03", "Laço de Cabelo Copa Do Mundo", 8.00, 50, 4, "World_cup", 3,/*[review]*/"Para se divertir ainda mais na copa e torcer para a nossa seleçao"));
    storeItem.push(new Store("pd04", "Kit Bandana Copa Do Mundo Brasil", 10, 150, 4, "World_cup", 3,/*[review]*/"Acessório para completar seu look para a Copa do Mundo 2022"/*image*/));
    storeItem.push(new Store("pd05", "Tiara Arco c/ Bandeira do Brasil", 5, 100, 4, "World_cup", 3,/*[review]*/"Tiara Bandeirinha Tecido, Junte-se a torcida do Brasil nesta Copa do Mundo de modo divertido e estiloso!"/*image*/));
    storeItem.push(new Store("pd06", "Miniatura Neymar Jr", 4, 120, 4, "World_cup", 3,/*[review]*/"Miniatura do Neymar Jr para torcer pela seleção brasileira na copa do mundo de 2022"/*image*/));
    storeItem.push(new Store("pd07", "Par De Laço pompom Infantil para a Copa Do Mundo", 9, 200, 4, "World_cup", 3,/*[review]*/"Parzinho de laço pompom para torcer nesta copa do mundo pelo brasil"/*image*/));
    storeItem.push(new Store("pd08", "Camisa Ciclismo Brasil ", 14, 100, 4, "World_cup", 3,/*[review]*/"Camisa Ciclista Brasil para Copa do Mundo Masculina com Manga Curta BeFast"/*image*/));
    storeItem.push(new Store("pd09", "Chapeu Copa Do Mundo 2022", 8.50, 120, 4, "World_cup", 3,/*[review]*/"Comemore a copa do mundo no estilo brasileiro! Se envolva com as cores verde, amarelo e azul para curtir os jogos de futebol"/*image*/));
    storeItem.push(new Store("pd10", "Saia De Tule Brasil Infantil", 12, 120, 4, "World_cup", 3,/*[review]*/"Saia de tule Infantil para turbinar ainda mais a torcisa pelo brasil na copa do mundo"/*image*/));
    storeItem.push(new Store("pd11", "Camiseta Nike Brasil 22 Swoosh Infantil", 46, 120, 4, "World_cup", 3,/*[review]*/"A Camiseta Nike Brasil Swoosh apresenta detalhes da seleção em tecido macio para manter você confortável o dia todo"/*image*/));
    storeItem.push(new Store("pd12", "Gravata Cartonagem Copa C/12", 7, 100, 4, "World_cup", 3,/*[review]*/"A gravata cartonagem é um acessório incrível para acrescentar em dias festivos como Copa do mundo"/*image*/));
    storeItem.push(new Store("pd13", "Vuvuzela para Copa Mundo", 5, 100, 4, "World_cup", 3,/*[review]*/"Linda corneta Amarela, material de excelente qualidade, proporcionando durabilidade e conforto durante o uso"/*image*/));
    storeItem.push(new Store("pd14", "Camiseta Nike Brasil Pré-Jogo Masculina", 70, 100, 4, "World_cup", 3,/*[review]*/"Assim como outras camisas da nossa coleção Stadium, esse modelo combina detalhes de design de réplica com tecido que absorve o suor para oferecer um visual preparado para o jogo e inspirado no seu time favorito"/*image*/));
    storeItem.push(new Store("pd15", "Boné Nike Heritage86 Brasil Unissex", 50, 100, 4, "World_cup", 3,/*[review]*/"Feito com tecido que absorve o suor, o Boné Brasil Heritage86 mantém você seco e confortável o dia todo"/*image*/));
    storeItem.push(new Store("pd16", "Copos Do Brasil Oficial - Copa Do Mundo", 7.00, 100, 4, "World_cup", 3,/*[review]*/"Lindos Copo da Seleção Brasileira Oficial"/*image*/));

    displayStore();
    displayCart();
}

/*
Function that will display the store items array in a dynamically table
*/
function displayStore() {

    document.getElementById("product1").innerHTML = storeItem[0].productId + "<br>" + storeItem[0].productName + "<br>" + storeItem[0].productPrice + "<br>" + storeItem[0].quantityAvailable + "<br>" + storeItem[0].maxQuantity;
    document.getElementById("product2").innerHTML = storeItem[1].productId + "<br>" + storeItem[1].productName + "<br>" + storeItem[1].productPrice + "<br>" + storeItem[1].quantityAvailable + "<br>" + storeItem[1].maxQuantity;
    document.getElementById("product3").innerHTML = storeItem[2].productId + "<br>" + storeItem[2].productName + "<br>" + storeItem[2].productPrice + "<br>" + storeItem[2].quantityAvailable + "<br>" + storeItem[2].maxQuantity;
    document.getElementById("product4").innerHTML = storeItem[3].productId + "<br>" + storeItem[3].productName + "<br>" + storeItem[3].productPrice + "<br>" + storeItem[3].quantityAvailable + "<br>" + storeItem[3].maxQuantity;
    document.getElementById("product5").innerHTML = storeItem[4].productId + "<br>" + storeItem[4].productName + "<br>" + storeItem[4].productPrice + "<br>" + storeItem[4].quantityAvailable + "<br>" + storeItem[4].maxQuantity;
    document.getElementById("product6").innerHTML = storeItem[5].productId + "<br>" + storeItem[5].productName + "<br>" + storeItem[5].productPrice + "<br>" + storeItem[5].quantityAvailable + "<br>" + storeItem[5].maxQuantity;
    document.getElementById("product7").innerHTML = storeItem[6].productId + "<br>" + storeItem[6].productName + "<br>" + storeItem[6].productPrice + "<br>" + storeItem[6].quantityAvailable + "<br>" + storeItem[6].maxQuantity;
    document.getElementById("product8").innerHTML = storeItem[7].productId + "<br>" + storeItem[7].productName + "<br>" + storeItem[7].productPrice + "<br>" + storeItem[7].quantityAvailable + "<br>" + storeItem[7].maxQuantity;
    document.getElementById("product9").innerHTML = storeItem[8].productId + "<br>" + storeItem[8].productName + "<br>" + storeItem[8].productPrice + "<br>" + storeItem[8].quantityAvailable + "<br>" + storeItem[8].maxQuantity;
    document.getElementById("product10").innerHTML = storeItem[9].productId + "<br>" + storeItem[9].productName + "<br>" + storeItem[9].productPrice + "<br>" + storeItem[9].quantityAvailable + "<br>" + storeItem[9].maxQuantity;
    document.getElementById("product11").innerHTML = storeItem[10].productId + "<br>" + storeItem[10].productName + "<br>" + storeItem[10].productPrice + "<br>" + storeItem[10].quantityAvailable + "<br>" + storeItem[10].maxQuantity;
    document.getElementById("product12").innerHTML = storeItem[11].productId + "<br>" + storeItem[11].productName + "<br>" + storeItem[11].productPrice + "<br>" + storeItem[11].quantityAvailable + "<br>" + storeItem[11].maxQuantity;
    document.getElementById("product13").innerHTML = storeItem[12].productId + "<br>" + storeItem[12].productName + "<br>" + storeItem[12].productPrice + "<br>" + storeItem[12].quantityAvailable + "<br>" + storeItem[12].maxQuantity;
    document.getElementById("product14").innerHTML = storeItem[13].productId + "<br>" + storeItem[13].productName + "<br>" + storeItem[13].productPrice + "<br>" + storeItem[13].quantityAvailable + "<br>" + storeItem[13].maxQuantity;
    document.getElementById("product15").innerHTML = storeItem[14].productId + "<br>" + storeItem[14].productName + "<br>" + storeItem[14].productPrice + "<br>" + storeItem[14].quantityAvailable + "<br>" + storeItem[14].maxQuantity;
    document.getElementById("product16").innerHTML = storeItem[15].productId + "<br>" + storeItem[15].productName + "<br>" + storeItem[15].productPrice + "<br>" + storeItem[15].quantityAvailable + "<br>" + storeItem[15].maxQuantity;
}

/*
Function that will display the cart items array.
*/
function displayCart() {
    if ($("main_shopping").hasClass("bag")) {
        alert("gui gay");
    }
}

/*
Function that will calculate and display the totals for the order in the cart.
*/
function cartTotals() {

}

/*
Function that will calculate currency
*/
function currencySelection() {

}

/*
Function that will add product to cart
*/
function addToCart() {

    displayCart();
    cartTotals();
}

/*
Function that will remove product from cart
*/
function removeFromCart() {

    displayCart();
    cartTotals();
}

/*
Function that will let the user to review the product
*/
function reviewProduct() {


}

/*
Function that will validate any information
*/
function validation() {

}

/*
Function that will display the product details
*/
function displayDetails() {

}

/* 
Page loads
*/
inicialDisplay();

