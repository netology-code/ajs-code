const tshirt = {
  id: 280,
  price: 340,
  name: 'No name t-shirt',
  category: 't-shirt',
};

const iphone = {
  id: 281,
  price: 60000,
  title: 'iPhone 11',
  category: 'mobile',
};


function createProduct(id, price, name, category) {
  const product = {
    id,
    price,
    name,
    category,
  };
  return product;
}

function Product(id, price, name, category) {
  this.id = id;
  this.price = price;
  this.name = name;
  this.category = category;
}

const tshirt = createProduct(280, 340, 'No name t-shirt', 't-shirt');
const iphone = new Product(281, 60000, 'iPhone 11', 'mobile');
