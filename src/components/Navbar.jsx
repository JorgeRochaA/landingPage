import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  OptionsContainer,
  Option,
  SignUpContainer,
  SignUp,
  Burger,
  Bar,
} from "../styles/Navbar";

function Navbar() {
  const options = ["About", "Services", "Projects", "Contacts"];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <OptionsContainer className={menuIsOpen ? "open" : ""}>
        {options.map((option, index) => {
          return <Option key={index}>{option}</Option>;
        })}
        <SignUpContainer>
          <SignUp>Sign Up</SignUp>
        </SignUpContainer>
      </OptionsContainer>
      <Burger className={menuIsOpen ? "open" : ""} onClick={toggleMenu}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Burger>
    </NavbarContainer>
  );
}

export default Navbar;
