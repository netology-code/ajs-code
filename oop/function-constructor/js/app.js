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

const tshirt = createProduct(280, 340, 'No name t-shirt', 't-shirt');
const iphone = createProduct(281, 60000, 'iPhone 11', 'mobile');
