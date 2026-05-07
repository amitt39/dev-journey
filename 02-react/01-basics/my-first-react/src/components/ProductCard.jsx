function ProductCard({ name, price, inStock }) {
  return (
    <>
      <h4>Product Name: {name}</h4>
      <h4>Product Price: {price}</h4>
      <h4 style={{ color: inStock ? "green" : "red" }}>
        {inStock === true ? "In Stock" : "Out of Stock"}
      </h4>
    </>
  );
}

export default ProductCard;
