import React, { useState } from 'react';
import "../css/filter.css";

function FilterForm ({ searchCourse, 
                       searchDoctor,
                       courseSearchUserFunction,
                       handleDoctorChange,
                       maxPriceChangeHandler,minPriceChangeHandler }) {
    

    return (
      <div class="filter_container">
      <div id="filters" class="md:col-span-3 col-span-12 mb-3 bg-white p-6 relative bg-gray-200 shadow-inner block">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="name" className="input"
           value={searchCourse}
           onChange={courseSearchUserFunction} />
        </div>
        <div>
          <label for="doctor">Doctor</label>
          <select id="doctor" value={searchDoctor} onChange={handleDoctorChange}>
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
              <input type="text" id="price-min" onChange={minPriceChangeHandler}/>
            </div>
            <div>&nbsp;-&nbsp;</div>
            <div class="price-input">
              <input type="text" id="price-max" onChange={maxPriceChangeHandler}/>
            </div>
       
          </div>
        </div>
      </div>
    </div>
    
      
    );
};

export default FilterForm;
