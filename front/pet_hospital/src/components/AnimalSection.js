import React from 'react';
import "../css/login_style.css";
import DOGIMG2 from "../images/dog2.png";

function AnimalSection() {
    return(
        <div class="container-fluid">
            <section class="text-section animal-section">
	<div class="container">
		<div class="row align-items-center">
			
			 <div class="col-md-6">
				<div class="right-img">
					<img src={DOGIMG2} alt="" />
				</div>
			</div>
			
			
			 <div class="col-md-6">
			   <div class="text-col">
					 <h2>As a veterinarian and
lover of animals</h2>
				   <p>Lorem Ipsum available but the majoty
suffered alteration in some form, by
humour randomised words</p>
				   <a href="" class="btn btn-primary">Our Service</a>
				 </div>  
			</div>
			
		   
			
		</div>
   </div>
</section>
        </div>
    )
}

export default AnimalSection;