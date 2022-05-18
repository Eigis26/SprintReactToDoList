import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
import './Main.css'




const Main = () => {
  return (
    <nav className="navbar navbar-expand-x1 navbar-expand-lg navbar-dark bg-danger">
    <Nav className="me-auto">
      <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Todo">ShoppingApp</NavLink>
    </Nav>
  </nav>
  );
}

export default Main;
