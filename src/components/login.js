import React from 'react';
import "../css/login_style.css";
import google_image from "../images/google.png";

function LoginForm(setLoggedIn) {
    return (
        <div className="form login">
            <div className="form-content">
                <header > Login</header>
                <form action="/">
                    <div className="field input-field">
                        <input type="email" placeholder="Email" className="input" />
                    </div>

                    <div className="field input-field">
                        <input type="password" placeholder="Password" className="password" />
                        <i className='bx bx-hide eye-icon'></i>
                    </div>

                    <div className="form-link">
                        <a href="#" className="forgot-pass">Forgot password?</a>
                    </div>

                    <div className="field button-field">
                        <button onClick={setLoggedIn}>Login</button>
                    </div>
                </form>

                <div className="form-link">
                    <span>Don't have an account? <a href="/sign_up" className="link signup-link">Signup</a></span>
                </div>
            </div>

            <div className="line"></div>

            <div className="media-options">
                <a href="#" className="field google">
                <img src={google_image} alt="" className="google-img" />
                    <span>Login with Google</span>
                </a>
            </div>
        </div>
    );
}



function FormsContainer() {
    return (
        <section className="container forms">
            <LoginForm />
        </section>
    );
}

export default FormsContainer;
