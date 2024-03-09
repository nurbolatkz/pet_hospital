import React from 'react';
import "../css/main_style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoIMG from '../images/logo.png'



function Header() {
  return (
    <header>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={LogoIMG} alt="company name" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team-section">
                  Our team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services-section">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts">
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
