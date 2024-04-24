import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";
import "./index.css";

const title = "Qinsyl Portfolio";
const description = "Welcome to my portfolio website!";
const keywords = "Qinsyl Portfolio";
const author = "Qinsyl";

ReactDOM.render(
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </Helmet>
    <App />
  </>,
  document.querySelector("#root")
);
