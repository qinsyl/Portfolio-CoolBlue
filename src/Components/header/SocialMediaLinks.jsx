import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const SocialMediaLinks = () => {
  return (
    <div className="social_links">
      <a
        href=""
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="" target="_blank">
        <BsGithub />
      </a>
      <a href="" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
