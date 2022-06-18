import React from "react";
import "../styles/Footer/Footer.scss";
import FooterLinksData from "../data/footerLinksData.json";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_links">
        <div className="footer_links_1">
          {FooterLinksData[0].map((link, index) => {
            return (
              <div className="link" key={index}>
                {link}
              </div>
            );
          })}
        </div>
        <div className="footer_links_2">
          {FooterLinksData[1].map((link, index) => {
            return (
              <div className="link" key={index}>
                {link}
              </div>
            );
          })}
        </div>
        <div className="footer_links_3">
          {FooterLinksData[2].map((link, index) => {
            return (
              <div className="link" key={index}>
                {link}
              </div>
            );
          })}
        </div>
        <div className="footer_links_4">
          <div className="link">Social</div>
          <div className="link">
            <i class="fa-brands fa-facebook"></i>
            Facebook
          </div>
          <div className="link">
            <i class="fa-brands fa-instagram"></i>
            Instagram
          </div>
          <div className="link">
            <i class="fa-brands fa-twitter"></i>
            Twitter
          </div>
          <div className="link">
            <i class="fa-brands fa-snapchat"></i>
            Snapchat
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="copyright">
          © Jorge Rocha, {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
