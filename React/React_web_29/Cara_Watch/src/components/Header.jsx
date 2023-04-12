import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/header.css";
import { FaUserAlt, FaShoppingBag, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <section id="header" className="container-fluid">
      <NavLink to="/">
        <img src="/images/logo.png" className="logo" alt="Icon" />
      </NavLink>
      <div>
        <ul id="navbar">
          <li>
            <NavLink className="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <NavLink to="#" id="close">
            <i className="fa-regular fa-xmark" />
          </NavLink>
        </ul>
      </div>
      <div id="info-form">
        <form className="search-form">
          <input className="search-item" type="text" placeholder="Search" />
          <NavLink to="#" className="search-icon">
            <FaSearch />
          </NavLink>
        </form>
        <div className="cart-form">
          <NavLink to="/cart">
            <FaShoppingBag />
          </NavLink>
          <span className="cart-quantity">0</span>
        </div>
        <div className="login-form">
          <NavLink to="/login">
            <FaUserAlt />
          </NavLink>
        </div>
      </div>
      <div id="mobile">
        <i className="bar-icon fa-solid fa-bars" />
      </div>
    </section>
  );
}
