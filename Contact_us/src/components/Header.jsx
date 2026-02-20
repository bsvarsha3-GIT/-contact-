import React from 'react'
import './Header.css'
import Logo from "../assets/header_img/headlogo.svg";
import Arrow from "../assets/header_img/downarrow.svg";
import Globe from "../assets/header_img/langglobe.svg";
import Search from "../assets/header_img/headsearch.svg";

function header() {
  return (
      <header className='headerContainer'>
        <div className="logoContainer">
          <img src={Logo} alt="headlogo" />
          <h4 className="logoName">Company Logo</h4>
        </div>
        <nav className="navBar">
          <div>Home</div>

          <div>
            About Us
            <span className="arrow">
              <img src={Arrow} alt="downarrow" />
            </span>
          </div>

          <div>
            Products
            <span className="arrow">
              <img src={Arrow} alt="downarrow" />
            </span>
          </div>

          <div>Contact</div>
        </nav>

        <nav className="headBox">
          <div className="language">
            <img className="globe" src={Globe} alt="langglobe" />
            <span className="lang-type">EN</span>
            <img src={Arrow} alt="downarrow" />
          </div>

          <div className="search-box">
            <span className="searchBar">
              <img src={Search} alt="headsearch" />
            </span>
            <input type="text" placeholder="Search for products..." />
          </div>

          <button className="requestButton">Request Quote</button>
        </nav>
    </header>
  )
}

export default header

