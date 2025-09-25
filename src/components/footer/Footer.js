import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const currentYear = new Date().getFullYear(); // dynamically get the year

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(`© ${currentYear} all rights reserved`)}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a
            href="https://github.com/mdamansour"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
        </p>
      </div>
    </Fade>
  );
}
