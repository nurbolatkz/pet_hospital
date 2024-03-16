import React, { useState } from 'react'
import FilterForm from './FilterForm';
import ProductItem from './ProductItem';
import DogImg from "../images/service1.jpg";
import Header from './Header';
import UserCartComponent from './UserCartComponent';
import "../css/product_item.css";
import DogImg2 from "../images/service2.jpg";
import DogImg3 from "../images/blog1.jpg";
import DogImg4 from "../images/blog2.jpg";
import DogImg5 from "../images/blog3.jpg";
import DogImg6 from "../images/service1.jpg";
import DogImg7 from "../images/service2.jpg";

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
      image: DogImg3 
    },
    { id: 4, 
      name: 'Dental Care', 
      price: 699, 
      doctor_name: 'Yana',
      image: DogImg3},
    { id: 5, 
      name: 'Behavioral Training', 
      price: 699, 

      doctor_name: 'Marina',
      image: DogImg4},
    { id: 6, 
      name: 'Nutrition Counseling', 
      price: 699, 
      doctor_name: 'Pasha',
      image: DogImg5 },
    { id: 7, 
      name: 'Microchipping', 
      price: 699, 
      doctor_name: 'Sasha',
      image: DogImg6},
    { id: 3, 
      name: 'Surgery', 
      price: 799, 
      doctor_name: 'Alex',
      image: DogImg7}
]);

const [cartCourses, setCartCourses] = useState([]);
const [searchCourse, setSearchCourse] = useState('');
const [searchDoctor, setsearchDoctor] = useState('');
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');

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

const DoctorSearchUserFunction = (event) => {
  setsearchDoctor(event.target.value);
};

const minPriceChangeHandler = (event) => {
  setMinPrice(event.target.value);
};

const maxPriceChangeHandler = (event) => {
  setMaxPrice(event.target.value);
};

const filteredCourses = [];
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  const courseName = course.name.toLowerCase();
  const courseDoctor = course.doctor_name.toLowerCase();
  
  // Check if the course matches the search criteria
  if (
    courseName.includes(searchCourse.toLowerCase()) &&
    courseDoctor.includes(searchDoctor.toLowerCase()) &&
    (!minPrice || course.price >= parseInt(minPrice)) &&
    (!maxPrice || course.price <= parseInt(maxPrice))
  ) {
    filteredCourses.push(course);
  }
}


  
    return (
      
      <div className='product_page'>
        <Header/>
        <FilterForm searchCourse={searchCourse} 
                    searchDoctor={searchDoctor}
                    courseSearchUserFunction={courseSearchUserFunction}
                    handleDoctorChange = {DoctorSearchUserFunction} 
                    minPriceChangeHandler={minPriceChangeHandler} 
                    maxPriceChangeHandler={maxPriceChangeHandler}  
        />
      <div className="container" id="product_list_container">
        
        <ProductItem
                    courses={courses}
                    filterCourseFunction={filteredCourses}
                    addCourseToCartFunction={addCourseToCartFunction}
                    
                />
      </div>
      <div>
      <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
      </div>
   
      </div>
    );
  }


export default ProductPage;