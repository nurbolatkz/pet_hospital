// ProductItem.js
import React from 'react';
import "../css/product_item.css"

function ProductItem({ courses, 
  filterCourseFunction, 
  addCourseToCartFunction}) {
  return (
    <div>
      <div className="product-list">
          {filterCourseFunction.length === 0 ? (
              <p className="no-results">
                  Sorry Geek, No matching Product found.
              </p>
          ) : (
              filterCourseFunction.map((product) => (
                  <div className="product-item" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <p>Price: USD {product.price}</p>
                      <p>Doctor:{product.doctor_name}</p>
                      <button
                          className="add-to-cart-button"
                          onClick={() => addCourseToCartFunction(product)}
                      >
                          Add to Shopping Cart
                      </button>
                  </div>
              ))
              
          )}
          
      </div>
  

      </div> 
  );
}

export default ProductItem;
