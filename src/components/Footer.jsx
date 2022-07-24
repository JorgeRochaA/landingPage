import React from "react";
import {
  FooterStyled,
  FooterLinksContainer,
  FooterLinks,
  Link,
  CopyrightContainer,
  Copyright,
} from "../styles/Footer";
import FooterLinksData from "../data/footerLinksData.json";
function Footer() {
  return (
    <FooterStyled>
      <FooterLinksContainer>
        <FooterLinks className="footer_links_1">
          {FooterLinksData[0].map((link, index) => {
            return <Link key={index}>{link}</Link>;
          })}
        </FooterLinks>
        <FooterLinks className="footer_links_2">
          {FooterLinksData[1].map((link, index) => {
            return <Link key={index}>{link}</Link>;
          })}
        </FooterLinks>
        <FooterLinks className="footer_links_3">
          {FooterLinksData[2].map((link, index) => {
            return <Link key={index}>{link}</Link>;
          })}
        </FooterLinks>
        <FooterLinks className="footer_links_4">
          <Link>Social</Link>
          <Link>
            <i className="fa-brands fa-facebook"></i>
            Facebook
          </Link>
          <Link>
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </Link>
          <Link>
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </Link>
          <Link>
            <i className="fa-brands fa-snapchat"></i>
            Snapchat
          </Link>
        </FooterLinks>
      </FooterLinksContainer>
      <CopyrightContainer>
        <Copyright>
          © Jorge Rocha, {new Date().getFullYear()}. All rights reserved.
        </Copyright>
      </CopyrightContainer>
    </FooterStyled>
  );
}

export default Footer;
