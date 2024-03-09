import React from 'react';
import "../css/login_style.css";
import ServiceIMG from "../images/services1.jpg"; 
import ServiceIMG1 from "../images/services.jpg"; 
import ServiceIMG2 from "../images/services3.jpg";

function ServiceContainer() {
    return(
        <div> 
            <section id="services-section" class="services-section">
	    <div class="container">
		     <div class="row">
			     <div class="col-md-12">
				      <h2 class="section-title">Services</h2>
					 <p class="mb-4"> Lorem Ipsum available, but the majority have
 suffered alteration in some form.</p>
				 </div>
				 
				 
				<div class="col-lg-4">
				    <div  class="services-box">
					    <div class="services-img">
						     <img src={ServiceIMG1} alt=""/>
						</div>
						<h3>Wellness Check-Up </h3>
						<p> Lorem Ipsum available, but
the majority have suffered
alteration in some.</p>
					</div>
				 </div> 
				 
				 
				<div class="col-lg-4">
				    <div  class="services-box">
					    <div class="services-img">
						     <img src={ServiceIMG} alt="" />
						</div>
						<h3>Pet Behavioral Training</h3>
						<p> Lorem Ipsum available, but
the majority have suffered
alteration in some.</p>
					</div>
				 </div>  
				 
				 
				  
				<div class="col-lg-4">
				    <div  class="services-box">
					    <div class="services-img">
						     <img src={ServiceIMG2}alt="" />
						</div>
						<h3>Pet Grooming</h3>
						<p> Lorem Ipsum available, but
the majority have suffered
alteration in some.</p>
					</div>
				 </div> 
				 
				 
				 
				 
			</div>
		</div>
	</section>
        </div>
    )
}

export default ServiceContainer;