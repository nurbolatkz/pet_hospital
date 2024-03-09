import React from 'react';
import "../css/main_style.css";
import TeamIMG1 from "../images/team1.jpg";
import TeamIMG2 from "../images/team2.jpg";
import TeamIMG3 from "../images/team3.jpg";

function TeamContainer() {
    return(
        <div> 
             <section id="team-section" className="team-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro-main">
                            <h2 className="section-title">The vetcare team</h2>
                            <p> Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="team-box">
                            <div className="team-img">
                                <img src={TeamIMG1} alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Jennifer Mullen</h3>
                                <p>VETERINARY</p>
                                <ul className="team-social">
                                    <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="team-box">
                            <div className="team-img">
                                <img src={TeamIMG2} alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Jennifer Mullen</h3>
                                <p>VETERINARY</p>
                                <ul className="team-social">
                                    <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="team-box">
                            <div className="team-img">
                                <img src={TeamIMG3} alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Jennifer Mullen</h3>
                                <p>VETERINARY</p>
                                <ul className="team-social">
                                    <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}

export default TeamContainer;