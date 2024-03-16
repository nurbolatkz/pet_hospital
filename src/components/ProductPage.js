import React, { useState } from 'react'
import ProductList from './ProductList';
import FilterForm from './FilterForm';
import ProductItem from './ProductItem';
import DogImg from "../images/dog.png";



function ProductPage() {
  
  const [courses, setCourses] = useState([
    { id: 1, 
      name: 'Wellness Check-ups', 
      price: 499, 
      doctor_name: 'Marina',
      image: DogImg
    },
    { id: 2, 
      name: 'Vaccinations', 
      price: 699, 
      doctor_name: 'Yana',
      image: DogImg
    },
    { id: 4, 
      name: 'Dental Care', 
      price: 699, 
      doctor_name: 'Yana',
      image: DogImg},
    { id: 5, 
      name: 'Behavioral Training', 
      price: 699, 

      doctor_name: 'Marina',
      image: DogImg},
    { id: 6, 
      name: 'Nutrition Counseling', 
      price: 699, 
      doctor_name: 'Pasha',
      image: DogImg },
    { id: 7, 
      name: 'Microchipping', 
      price: 699, 
      doctor_name: 'Sasha',
      image: DogImg},
    { id: 3, 
      name: 'Surgery', 
      price: 799, 
      doctor_name: 'Alex',
      image: DogImg}
]);

const [cartCourses, setCartCourses] = useState([]);
const [searchCourse, setSearchCourse] = useState('');

const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses
                           .find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
        const latestCartUpdate = cartCourses.map(item =>
            item.product.id === GFGcourse.id ? { 
            ...item, quantity: item.quantity + 1 } 
            : item
        );
        setCartCourses(latestCartUpdate);
    } else {
        setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
    }
};

const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
                        .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
};

const totalAmountCalculationFunction = () => {
    return cartCourses
           .reduce((total, item) => 
                       total + item.product.price * item.quantity, 0);
};

const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
};

const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
);
  
    return (
      <div>
        <FilterForm searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction}
        />
      <div className="container">
        
        <ProductItem
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
      </div>
      </div>
    );
  }


export default ProductPage;