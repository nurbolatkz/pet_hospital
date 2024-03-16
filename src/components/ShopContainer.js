import React from 'react';
import "../css/main_style.css";
import DogIMG3 from "../images/dog3.jpg";
import DogIMG4 from "../images/dog4.jpg";
import DogIMG5 from "../images/dog5.jpg";

function ShopContainer() {
    return(
        <div> 
            <section className="shop-section"> 
        
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="intro-main">
                    <h2 className="section-title">Available Packages</h2>
                    <p> Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="shop-box">
                    <h5>Wellness Package</h5>
                    <div className="shop-img">
                        <img src={DogIMG3} alt="" />
                    </div>
                    <div className="shop-info">
                        <p>
                            -Includes annual vaccinations<br />
                            -Routine health check-ups<br />
                            -Preventive medications for fleas, ticks, and heartworm
                            <br />-Nutritional counseling session
                        </p>
                        <div className="price">
                            <span className="offer-price">$50</span>
                            <span className="offer-price2">$30</span>
                        </div>
                        <a href="/services" className="btn btn-blue">Buy Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="shop-box">
                    <h5>Pamper Package</h5>
                    <div className="shop-img">
                        <img src={DogIMG4} alt="" />
                    </div>
                    <div className="shop-info">
                        <p>
                            -Professional grooming session (bath, haircut, nail trimming)<br />
                            -Dental cleaning and examination<br />
                            -A deluxe pet bed or accessory
                            <br />-A selection of premium pet treats and toys
                        </p>
                        <div className="price">
                            <span className="offer-price">$50</span>
                            <span className="offer-price2">$30</span>
                        </div>
                        <a href="/services" className="btn btn-blue">Buy Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="shop-box">
                    <h5>Traveler's Package</h5>
                    <div className="shop-img">
                        <img src={DogIMG5} alt="" />
                    </div>
                    <div className="shop-info">
                        <p>
                            -Pre-travel health examination and certificate<br />
                            -Microchip implantation for identification<br />
                            -Pet travel carrier or harness
                        </p>
                        <div className="price">
                            <span className="offer-price">$50</span>
                            <span className="offer-price2">$30</span>
                        </div>
                        <a href="/services" className="btn btn-blue">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
    )
}

export default ShopContainer;