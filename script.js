var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

function popUp(produce) {
  let that = this;
  this.ele = document.createElement("div");
  this.ele.className = "popUp";
  this.ele.innerHTML = produce;
  this.ele.addEventListener("click", function () {
    document.body.removeChild(that.ele);
  });
  document.body.appendChild(this.ele);
}

var produce = [];
function product(name, price, image, color) {
  var that = this;
  this.name = name;
  this.price = price;
  this.image = image;
  this.color = color;
  this.ele = document.createElement("div");
  this.ele.className = "product";
  this.ele.innerHTML ="<img src=" +this.image +">"+"</br>Name:"+this.name +"</br>Price:$"+this.price;
  this.ele.addEventListener("mouseover", function () {
    that.ele.style.borderColor = that.color;
  });
  this.ele.addEventListener("mouseout", function () {
    that.ele.style.borderColor = "black";
  });
  this.ele.addEventListener("click", function () {
    popUp(that.ele.innerHTML);
  });
  document.body.appendChild(this.ele);
}
for (var i = 0; i < product.length; i++) {
  products.push(
    new product(
      products[i].name,
      products[i].price,
      products[i].image,
      products[i].color
    )
  );
}