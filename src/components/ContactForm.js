
import React from "react";
import "../css/contact_style.css";
import ContactIMG from "../images/contact_form_img.jpg";

function ContactForm() {
    return (
        <div className="Contact_Container">
            <img src={ContactIMG} alt="Form" />          
            <form>
                <h1 className="title text-center mb-4">Talk to Us</h1>

                <div className="form-group position-relative">
                    <label htmlFor="formName" className="d-block">
                        <i className="icon" data-feather="user"></i>
                    </label>
                    <input type="text" id="formName" className="form-control form-control-lg thick" placeholder="Name"/>
                </div>

                <div className="form-group position-relative">
                    <label htmlFor="formEmail" className="d-block">
                        <i className="icon" data-feather="mail"></i>
                    </label>
                    <input type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail"/>
                </div>

                <div className="form-group message">
                    <textarea id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Mensagem"></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;