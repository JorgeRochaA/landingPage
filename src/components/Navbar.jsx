import React, { useState } from "react";

import "../styles/Navbar/Navbar.scss";

function Navbar() {
  const options = ["About", "Services", "Projects", "Contacts"];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="navbar">
      <h2>Logo</h2>
      <ul
        className={menuIsOpen ? "options_container open" : "options_container"}
      >
        {options.map((option, index) => {
          return (
            <h3 className="options" key={index}>
              {option}
            </h3>
          );
        })}
        <div className="signUp_container">
          <h3 className="signUp">Sign Up</h3>
        </div>
      </ul>
      <div
        className={menuIsOpen ? "burger open" : "burger"}
        onClick={toggleMenu}
      >
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
      </div>
    </div>
  );
}

export default Navbar;
