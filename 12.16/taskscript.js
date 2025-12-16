//let obj = {name: "John", age: 18, status:undefined};
//console.log(obj);
//let json = JSON.stringify(obj);
//console.log(json);
//let response = JSON.parse(json);
//console.log(response);
//
//Object.values(obj).forEach(value => {
//console.log(value)
//}); //nichego
//
//let newElement = Object.values(obj).map(value => {
//console.log(newElement)

//fetch('https://jsonplaceholder.typicode.com/posts')
//      .then(response => response.json())
//      .then((data) => {
//      let obj = data.filter(data => data.title.startsWith('ad'));
//      console.log(obj);
//      });

//let posts=document.getElementById("posts");
//posts.innerHTML='';
//fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
//.then((data) => {
// data.forEach(value =>
// posts.innerHTML += '<p>' + value.title + '</p>');
//});


//fetch('https://dummyjson.com/products')
//.then(response => response.json())
//.then((data) => {
//    data.products.forEach(value =>
//    console.log(value));
//    });

//next is task

let banners=document.getElementsByClassName("banner");

fetch('https://dummyjson.com/products')
.then(response => response.json())
.then((data) => {
    const productArray = data.products;
    for (var i=0; i<banners.length; i++) {
        data.products.forEach(value =>
        banners[i].innerHTML = productArray[i].title +
         '<p>' + productArray[i].description + '</p>' +
        '<p> $' + productArray[i].price + '</p>' );
        }
   })

//function priceFilter() {
//    const fromPrice = document.getElementById("priceFilterFrom").value;
//    const toPrice = document.getElementById("priceFilterTo").value;
//    const newProducts = productArray.filter(products => products.price > fromPrice && products.price < toPrice);
//    }
