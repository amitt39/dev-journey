// loops through all products, renders multiple ProductCards

import products from "../ProductsData";

function ProductList() {
  return (
    <>
      {products.map((product) => {
        console.log([product]);
      })}
    </>
  );
}

export default ProductList;
