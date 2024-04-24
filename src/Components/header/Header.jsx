import React from "react";
import "./header.css";
import Download_Buttons from "./Download_Buttons";
import SocialMediaLinks from "./SocialMediaLinks";
import myImg from "../../assets/piyush.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, My Name is</h5>
        <h2>Qinsyl</h2>
        <h5 className="text-light">Python Data Scientist</h5>
        <Download_Buttons />
        <SocialMediaLinks />
        <div className="myImg">
          <img
            src={
              "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png"
            }
            alt="Qinsyl"
          />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
