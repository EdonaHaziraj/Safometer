import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { Layout } from "antd";
import MapComponent from "./components/Map.jsx";
import SiderPanel from "./components/SiderPanel";
import "../src/css/App.css";
import logo from "./assets/logo.jpg";
import { Link } from "react-router-dom";
// import Navbar from "./components/Nav/Navbar.jsx";
import Platform from "./components/Platform.js";
import Map from "./components/Map.jsx";
import NotFoundRoute from "./components/NotFoundRoute/index";
import ThemeProvider from "./context/theme-context";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={NotFoundRoute} />
      </Switch>
    </BrowserRouter>
    {/* </BrowserRouter> */}
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
