import React from 'react';
import "../css/main_style.css";
import SectionImage from '../images/dog1.jpg';

function BannerSecond() {
    return (
        <div>
            <section class="text-section">
	     <div class="container">
		     <div class="row align-items-center">
			      <div class="col-md-6">
				    <div class="text-col">
					      <h2>Our Commitment to Excellence</h2>
						<p>At Our Pet Hospital, excellence isn't just a goal; it's our guiding principle. From the moment you and your furry friend walk through our doors, you become part of our family, and your pet's well-being becomes our top priority. With a relentless dedication to staying at the forefront of veterinary medicine, we continually invest in advanced technologies, ongoing training, and compassionate care practices.</p>
						<a href="" class="btn btn-primary">Our Service</a>
					  </div>  
				 </div>
				 
				 <div class="col-md-6">
				     <div class="right-img">
					     <img src={SectionImage} alt="" />
                    </div>
                </div>   
				 
				 
			 </div>
		</div>
	</section>
        </div>
    )
}


export default BannerSecond;
