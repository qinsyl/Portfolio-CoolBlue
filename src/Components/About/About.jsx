import React from "react";
import ME from "../../assets/about-piyush.jpeg";
import { FiAward } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5> Let me introduce myself</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-img">
            <img
              src={"https://avatars.githubusercontent.com/u/164210525?v=4"}
              alt="Qinsyl"
            />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>10 Months</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>

          <p>
            I am a Python Data Scientist with 10 months of experience in
            building and deploying machine learning models. I have worked on
            more than 10 projects in the field of data science and machine
            learning. I have experience in working with libraries like pandas,
            numpy, matplotlib, seaborn, scikit-learn, and tensorflow. I have
            also worked on deep learning projects using tensorflow and keras.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
