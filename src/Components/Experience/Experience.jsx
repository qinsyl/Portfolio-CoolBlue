import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./experience.css";

const Experience = () => {
  const [isActive, setIsActive] = useState(null);

  const experiences = [
    {
      title: "Data Analyst",
      company: "Insightful Analytics Ltd.",
      duration: "March 2022 - August 2022",
      skills: ["SQL", "Tableau", "Data Visualization", "Statistical Analysis"],
      details: [
        "Extracted and manipulated data from various sources using SQL.",
        "Designed and created interactive dashboards and reports using Tableau for data visualization.",
        "Conducted statistical analysis to identify trends, patterns, and outliers in the data.",
        "Collaborated with cross-functional teams to provide data-driven insights and recommendations.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Innovations Inc.",
      duration: "January 2024 - Present",
      skills: ["Python", "TensorFlow", "Keras", "Deep Learning"],
      details: [
        "Developed deep learning models for image classification and natural language processing tasks.",
        "Optimized model performance through hyperparameter tuning and regularization techniques.",
        "Deployed machine learning models into production environments for real-time inference.",
        "Continuously researching and implementing state-of-the-art machine learning algorithms and techniques.",
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>Journey So far</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experiences.map((exp, index) => (
          <div className="digilytics_systems" key={index}>
            <h3>{exp.title}</h3>
            <small>{exp.company}</small>
            <small>{exp.duration}</small>
            <div className="experience_content">
              {exp.skills.map((skill, skillIndex) => (
                <article className="experience_details" key={skillIndex}>
                  <BsPatchCheckFill className="experience_details-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
            <span className="experience_details-more">
              <span onClick={() => setIsActive(index)}>View More</span>
            </span>
            <div
              className={`experience_model ${
                isActive === index ? "active-model" : ""
              }`}
            >
              <div class="experience_model-content">
                <h4 class="experience_model-title">
                  Noted <br /> Accomplishments
                </h4>
                <i
                  class="experience_model-close"
                  onClick={() => setIsActive(null)}
                >
                  <AiOutlineCloseCircle />
                </i>

                <ul class="experience_model-points">
                  {exp.details.map((detail, detailIndex) => (
                    <li class="experience_model-point" key={detailIndex}>
                      <BsPatchCheckFill className="experience_details-icon" />
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
