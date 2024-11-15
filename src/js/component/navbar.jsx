import React from "react";

function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link disabled" aria-disabled="true">About</a>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link disabled" aria-disabled="true">Services</a>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link disabled" aria-disabled="true">Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    )
    
}

export default NavBar