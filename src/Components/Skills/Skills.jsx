import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Data Science Skills</h5>
      <h2>Data Science Skills</h2>

      <div className="container skills__container">
        {/* ================================================ */}

        <div className="programming_languages">
          <h3>Programming Languages</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>R</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>SQL</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="machine_learning">
          <h3>Machine Learning</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Scikit-Learn</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>TensorFlow</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>PyTorch</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Keras</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="data_analysis">
          <h3>Data Analysis</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Pandas</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>NumPy</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Matplotlib</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Seaborn</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="data_visualization">
          <h3>Data Visualization</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Plotly</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Tableau</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Power BI</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Matplotlib</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="statistics">
          <h3>Statistics</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Probability</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Statistical Modeling</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Hypothesis Testing</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Regression Analysis</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="data_engineering">
          <h3>Data Engineering</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Apache Spark</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Hadoop</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Airflow</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>ETL</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="cloud_platforms">
          <h3>Cloud Platforms</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>AWS</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Azure</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Google Cloud Platform</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="others">
          <h3>Other Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Big Data Technologies</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Machine Learning Operations (MLOps)</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Version Control (Git)</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
