import React from 'react';
import "../css/main_style.css";
import IconIMG1 from "../images/icon1.png";
import IconIMG2 from "../images/icon2.png";
import IconIMG3 from "../images/icon3.png";

function StatsSection() {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="stats-box">
                            <img src={IconIMG1} alt="" />
                            <h2>+34793</h2>
                            <h3>Happy Clients</h3>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="stats-box">
                            <img src={IconIMG2} alt="" />
                            <h2>+45382</h2>
                            <h3>Departament</h3>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="stats-box">
                            <img src={IconIMG3} alt="" />
                            <h2>+54762</h2>
                            <h3>Vaccinations</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsSection;