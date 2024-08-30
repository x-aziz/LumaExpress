import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
// ... import other images as needed
import img from "./img/aziz.JPG";
import CustomNavbar from "./CustomNavbar";
const NavMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return (
    <>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            home
          </Link>
        </li>
        {/* Catalog Dropdown */}
        <li
          className={`nav-item dropdown ${
            activeDropdown === "catalog" ? "active" : ""
          }`}
          onMouseEnter={() => handleDropdownToggle("catalog")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <button className="nav-link dropdown-toggle">catalog</button>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4>men</h4>
                <ul>
                  <li>
                    <Link to="/catalog/clothing">clothing</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">watches</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">bags-Luggage</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">footwear</Link>
                  </li>
                  <li>
                    <Link to="/product-list">innerwear</Link>
                  </li>
                  <li>
                    <Link to="/product-list/right">other-accessories</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>women</h4>
                <ul>
                  <li>
                    <Link to="/product-list/defualt">western-wear</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">handbags-clutches</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">lingerie-nightwear</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/sidebar-banner">footwear</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/Default">
                      fashion-silver-jewellery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>accessories-others</h4>
                <ul>
                  <li>
                    <Link to="/products-grid/right">home-kitchen-pets</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">beauty-health-grocery</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/sidebar-banner">
                      sports-fitness-bags-luggage
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-list">car-motorbike-industrial</Link>
                  </li>
                  <li>
                    <Link to="/product-list/right">books</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>others</h4>
                <ul>
                  <li>
                    <Link to="/auth-signup-basic">sign-up</Link>
                  </li>
                  <li>
                    <Link to="/auth-signin-basic">sign-in</Link>
                  </li>
                  <li>
                    <Link to="/auth-pass-reset-basic">password-reset</Link>
                  </li>
                  <li>
                    <Link to="/auth-404">error-404</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section image-section">
                <img src={img} alt="Promotional" />
                <Link to="/#" className="btn">
                  shop-now
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li
          className={`nav-item dropdown ${
            activeDropdown === "catalog" ? "active" : ""
          }`}
          onMouseEnter={() => handleDropdownToggle("catalog")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <button className="nav-link dropdown-toggle">catalog</button>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4>men</h4>
                <ul>
                  <li>
                    <Link to="/catalog/clothing">clothing</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">watches</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">bags-Luggage</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">footwear</Link>
                  </li>
                  <li>
                    <Link to="/product-list">innerwear</Link>
                  </li>
                  <li>
                    <Link to="/product-list/right">other-accessories</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>women</h4>
                <ul>
                  <li>
                    <Link to="/product-list/defualt">western-wear</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">handbags-clutches</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">lingerie-nightwear</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/sidebar-banner">footwear</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/Default">
                      fashion-silver-jewellery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>accessories-others</h4>
                <ul>
                  <li>
                    <Link to="/products-grid/right">home-kitchen-pets</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">beauty-health-grocery</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/sidebar-banner">
                      sports-fitness-bags-luggage
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-list">car-motorbike-industrial</Link>
                  </li>
                  <li>
                    <Link to="/product-list/right">books</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>others</h4>
                <ul>
                  <li>
                    <Link to="/auth-signup-basic">sign-up</Link>
                  </li>
                  <li>
                    <Link to="/auth-signin-basic">sign-in</Link>
                  </li>
                  <li>
                    <Link to="/auth-pass-reset-basic">password-reset</Link>
                  </li>
                  <li>
                    <Link to="/auth-404">error-404</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section image-section">
                <img src={img} alt="Promotional" />
                <Link to="/#" className="btn">
                  shop-now
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li
          className={`nav-item dropdown ${
            activeDropdown === "catalog" ? "active" : ""
          }`}
          onMouseEnter={() => handleDropdownToggle("catalog")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <button className="nav-link dropdown-toggle">catalog</button>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4>men</h4>
                <ul>
                  <li>
                    <Link to="/catalog/clothing">clothing</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">watches</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">bags-Luggage</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">footwear</Link>
                  </li>
                  <li>
                    <Link to="/product-list">innerwear</Link>
                  </li>
                  <li>
                    <Link to="/product-list/right">other-accessories</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>women</h4>
                <ul>
                  <li>
                    <Link to="/product-list/defualt">western-wear</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">handbags-clutches</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/right">lingerie-nightwear</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/sidebar-banner">footwear</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/Default">
                      fashion-silver-jewellery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>accessories-others</h4>
                <ul>
                  <li>
                    <Link to="/products-grid/right">home-kitchen-pets</Link>
                  </li>
                  <li>
                    <Link to="/product-list/left">beauty-health-grocery</Link>
                  </li>
                  <li>
                    <Link to="/products-grid/sidebar-banner">
                      sports-fitness-bags-luggage
                    </Link>
                  </li>
                  <li>
                    <Link to="/product-list">car-motorbike-industrial</Link>
                  </li>
                  <li>
                    <Link to="/product-list/right">books</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>others</h4>
                <ul>
                  <li>
                    <Link to="/auth-signup-basic">sign-up</Link>
                  </li>
                  <li>
                    <Link to="/auth-signin-basic">sign-in</Link>
                  </li>
                  <li>
                    <Link to="/auth-pass-reset-basic">password-reset</Link>
                  </li>
                  <li>
                    <Link to="/auth-404">error-404</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-section image-section">
                <img src={img} alt="Promotional" />
                <Link to="/#" className="btn">
                  shop-now
                </Link>
              </div>
            </div>
          </div>
        </li>
        {/* Additional menu items can be added similarly */}
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </li>
      </ul>

    </>
  );
};

export default NavMenu;
