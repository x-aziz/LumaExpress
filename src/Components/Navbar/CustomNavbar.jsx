import React, { useState } from "react";
import "./CustomNavbar.css"; // Import your custom CSS
// import img from "./img/aziz.jpg"; // Update the path accordingly
import cart from "./img/cart-large-2-svgrepo-com.svg"; // Import your custom SVG
import search from "./img/search-alt-1-svgrepo-com.svg"; // Import your custom SVG
import sun from "./img/sun-svgrepo-com.svg"; // Import your custom SVG
import profile from "./img/profile-circle-svgrepo-com.svg"; // Import your custom SVG
function CustomNavbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="icons_part">
      <img
        src={search}
        onClick={() => setIsSearchVisible(!isSearchVisible)}
        alt=""
      />
      {isSearchVisible && (
        <div className="search">
          <select name="" id="">
            <option value="" hidden>
              shop
            </option>
            <option value="">Lumatex</option>
            <option value="">HVAC</option>
            <option value="">MGP</option>
          </select>
          <input type="text" placeholder="type your product" id="" />
          <div className="searchShape">
            <img src={search} alt="" />
          </div>
        </div>
      )}
      <img src={cart} alt="" />
      <div
        className="sun-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={sun} alt="" />
        {isHovered && (
          <div className="dropdown-sun">
            <button>Default (light mode)</button>
            <button>Dark</button>
            <button>Auto (system default)</button>
          </div>
        )}
      </div>

      <img src={profile} alt="" />
    </div>
  );
}

export default CustomNavbar;

// <div className="navbar-overlay" onClick={() => setShow(false)}>
//   <div className="d-flex">
//     <button
//       type="button"
//       className="btn-icon topbar-btn ghost-dark rounded-circle"
//       onClick={handleShow}
//     >
//       <i className="icon-search"></i>
//     </button>
//     {show && <SearchModal show={show} handleClose={handleClose} />}
//     <div className="topbar-item">
//       <button
//         type="button"
//         className="btn-icon topbar-btn ghost-dark rounded-circle"
//         onClick={handleCartShow}
//       >
//         <i className="icon-cart"></i>
//         <span className="cart-badge">4</span>
//       </button>
//     </div>
//     {/* {cart && <CartModal show={cart} handleClose={handleCartClose} />} */}

//     <div className="topbar-item dropdown">
//       <button
//         type="button"
//         className="btn-icon topbar-btn ghost-dark rounded-circle"
//       >
//         <i className="icon-sun"></i>
//       </button>
//       <div className="dropdown-menu">
//         <button onClick={() => props.handleMood("light")}>
//           Default (light mode)
//         </button>
//         <button onClick={() => props.handleMood("dark")}>Dark</button>
//         <button onClick={() => props.handleMood("auto")}>
//           Auto (system default)
//         </button>
//       </div>
//     </div>

//     <div className="topbar-item dropdown">
//       <a href="#!" className="btn-icon topbar-btn rounded-circle">
//         <img
//           src={img}
//           alt="User Avatar"
//           className="header-profile-user rounded-circle"
//         />
//       </a>
//       <div className="dropdown-menu">
//         <a href="/shop/orderhistory">Order History</a>
//         <a href="/shop/order">Track Orders</a>
//         <a href="#/dashboard">Dashboard</a>
//         <a href="/ecommerce-faq">Help</a>
//         <a href="/account">
//           Balance: <b>$8451.36</b>
//         </a>
//         <a href="/account">Settings</a>
//         <a href="/auth-logout-basic">Logout</a>
//       </div>
//     </div>
//   </div>
// </div>
