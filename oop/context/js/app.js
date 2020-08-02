function Product(id, price, name, category) {
  this.id = id;
  this.price = price;
  this.name = name;
  this.category = category;
}
Product.prototype.getShortTitle = function() {
  return `${this.name} - ${this.price}`
};
Product.prototype.getShortTitlePrefixed = function(prefix) {
  return `${prefix}: ${this.name} - ${this.price}`
};

const product = new Product(281, 60000, 'iPhone 11', 'mobile');

try {
  console.log(product.getShortTitle());

  const getShortTitle = product.getShortTitle;
  console.log(getShortTitle()); // ' - undefined'
} catch (e) {
  console.error(e);
}

{
  // call + apply
  const getShortTitle = product.getShortTitlePrefixed;
  console.log(getShortTitle.call(product, 'PREFIX')); // this - product
  console.log(getShortTitle.apply(product, ['PREFIX'])); // this - product
}

{
  // bind
  const getShortTitle = product.getShortTitle;
  const getShortTitleBind = getShortTitle.bind(product);
  console.log(getShortTitleBind()); // this - product
  console.log(getShortTitle === getShortTitleBind); // это разные объекты!
}
