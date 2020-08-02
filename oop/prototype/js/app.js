{
  // прототип
  function Product(id, price, name, category) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.category = category;
  }
  Product.prototype.getShortTitle = function() {
    return `${this.name} - ${this.price}`
  };

  const tshirt = new Product(280, 340, 'No name t-shirt', 't-shirt');
  const iphone = new Product(281, 60000, 'iPhone 11', 'mobile');

  console.log(tshirt.getShortTitle === iphone.getShortTitle); // true!
  // tshirt.__proto__.getShortTitle === iphone.__proto__.getShortTitle
}

{
  // запись
  function Product(id, price, name, category) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.category = category;
  }
  Product.prototype.getShortTitle = function() {
    return `${this.name} - ${this.price}`
  };

  const tshirt = new Product(280, 340, 'No name t-shirt', 't-shirt');
  const iphone = new Product(281, 60000, 'iPhone 11', 'mobile');

  tshirt.getShortTitle = function() {
    return `${this.name} - ${this.price}`
  };
  // оригинальный метод остался в __proto__.getShortTitle

  console.log(tshirt.getShortTitle === iphone.getShortTitle); // false!
  // на самом деле: tshirt.getShortTitle === iphone.__proto__.getShortTitle
}
