import React from "react";
import "./Nav.css"
const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h2 className="logo">Web <span>Developer</span></h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#servise">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h2 className="logo">Web <span>Developer</span></h2>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
                  <a class="nav-link active phone_navbar_link" aria-current="page" href="#home">Home</a> 
                  <a class="nav-link phone_navbar_link" href="#about">About</a>
                  <a class="nav-link phone_navbar_link" href="#servise"> Services</a>
                  <a class="nav-link phone_navbar_link" href="#project">Project</a>
                  <a class="nav-link phone_navbar_link" href="#concat">Concat</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Nav;
