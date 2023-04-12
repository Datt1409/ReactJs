import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/men">
          Men
        </NavLink>
        <NavLink className="nav-link" to="/women">
          Women
        </NavLink>
        <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/cart">
          Cart
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/singleproduct">
          Single-product
        </NavLink>
        <NavLink className="nav-link" to="/todo">
          Todo
        </NavLink>
      </nav>
    </div>
  );
}
