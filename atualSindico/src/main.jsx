import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.jsx";
import { GlobalStyles } from "./Styles/GlobalStyles.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>
);
