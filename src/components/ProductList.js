// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div id="list">
      {products.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
