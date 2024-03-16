import React, { useState } from 'react';
import "../filter.css";

function FilterForm ({ searchCourse, courseSearchUserFunction }) {
    

    return (
      <div class="grid grid-cols-1 md:grid-cols-12 h-screen">
      <div id="filters" class="md:col-span-3 col-span-12 mb-3 bg-white p-6 relative bg-gray-200 shadow-inner block">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div>
          <label for="country">Doctor</label>
          <select id="country">
            <option value="">-- Doctor --</option>
            <option value="Yana">Yana</option>
            <option value="Sasha">Sasha</option>
            <option value="Pasha">Pasha</option>
            <option value="Marina">Marina</option>
            <option value="Alex">Alex</option>
          </select>
        </div>
        <div>
          <label for="price-min">Price</label>
          <div class="flex">
            <div class="price-input">
              <input type="text" id="price-min"/>
            </div>
            <div>&nbsp;-&nbsp;</div>
            <div class="price-input">
              <input type="text" id="price-max"/>
            </div>
            <div>&nbsp;usd&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
    
      
    );
};

export default FilterForm;
