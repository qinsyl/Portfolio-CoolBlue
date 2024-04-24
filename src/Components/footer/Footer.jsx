import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">Qinsyl</div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://instagram.com/." target="_blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/=" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Qinsyl 2024</small>
      </div>
    </footer>
  );
};

export default Footer;
