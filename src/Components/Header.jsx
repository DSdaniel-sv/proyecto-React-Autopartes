import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Header.css";
import styled from "styled-components";
import Ham from "./Ham";
import imgLogo from "../assets/img/logo/logo.png";

const Header = ({ setShow, size }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className="header">
      <div className="nav__superior">
        <nav className="nav__1">
          <div className="box__logo">
            <Link to="/">
              <img src={imgLogo} alt="logo" />
            </Link>
          </div>
          <div className="box__icons-nav1">
            <Link className="link-ico">
              <i class="fa-solid fa-circle-user"></i>Sign in
            </Link>
            <Link className="link-ico">
              <i class="fa-solid fa-right-to-bracket"></i>Log in
            </Link>
            <Link to="cart">
            <div className="cart" onClick={() => setShow(false)}>
              <span>
                <i className="fas fa-cart-plus"></i>
              </span>
              <span>{size}</span>
            </div>
            </Link>

            
          </div>
        </nav>
      </div>

      <div className="nav__inferior">
        <nav className="nav__2">
          <div className={`links ${clicked ? "active" : ""}`} id="menu-links">
            <li>
              <NavLink
                className="nav-link link-1"
                to="/"
                activeclassname="active"
              >
                <span className="my_shop" onClick={() => setShow(true)}>
                  Inicio
                </span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link link-3"
                to="/ofertas"
                activeclassname="active"
              >
                <span>Ofertas</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link link-4"
                to="/contacto"
                activeclassname="active"
              >
                <span>Contacto</span>
              </NavLink>
            </li>
          </div>

          <form action="" className="frm__search2">
            <input
              type="search"
              placeholder="¿Que desea buscar?"
              className="search"
            />
          </form>

          <div className="ham-burger">
            <Ham clicked={clicked} handleClick={handleClick} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const NavBar = styled.nav;
