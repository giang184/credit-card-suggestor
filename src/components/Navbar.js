import React from "react";

function Navbar(){
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">CCSuggestor</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          </ul>
          <ul className="nav navbar-nav float-md-right">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Not implemented yet" aria-label="Search"></input>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;