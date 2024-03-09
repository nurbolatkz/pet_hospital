import React from 'react';
import "../css/main_style.css";
import DogFile from "../images/dog.png";


function BannerSection() {
    return (<div>
        <section class="banner-section">
	     <div class="container">
		     <div class="row align-items-center">
			      <div class="col-md-6">
				      <div class="banner-text">
					      <h1>Your Pet's Wellness Oasis</h1>
						  <p>Welcome to our haven of care, where tails wag and whiskers twitch with joy. At our Pet Hospital, 
							we're dedicated to the health and happiness of your furry friends.</p>
						  
						  <div class="btn-main">
						      <a href="" id='contac_us_btn' class="btn btn-blue">Contact Us</a>
						      <a href="" class="btn btn-outline-light">Our Service</a>
						  </div>
					   </div>
				 </div>
				 
				 <div class="col-md-6">
				      <div class="banner-img">
					     <img src={DogFile} alt=""/>
					 </div>
				 </div>
				 
			 </div>
		</div>
	</section>

    </div>);
}


export default BannerSection;