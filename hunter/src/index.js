import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
