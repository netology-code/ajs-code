export default function calculateTotal(purchases) {
  let result = 0;
  for (const purchase of purchases) {
    result += purchase.price * purchase.count;
  }

  return result;
}
