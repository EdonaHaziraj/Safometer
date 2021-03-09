import React from "react";
import { Layout } from "antd";
import MapComponent from "./Map.jsx";
import SiderPanel from "./SiderPanel";
import "../css/App.css";
import logo from "../assets/logo.jpg";
// import Navbar from "./Nav/Navbar.jsx";
import { Switch, Route } from "react-router-dom";
import Platform from "./Platform.js";
import Contact from "./Contact";
import Map from "./Map.jsx";
// import { Platform } from "./components";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Header from "./Header.jsx";
const { Content } = Layout;
function App() {
  return (
    // Navbar should have app class in order to be mobile-responsive

    <Provider store={store}>
      <Router>
        {/* <div className="app"> */}
        <div className="main">
          <Header />
          {/* </div> */}

          <Layout className="main-app">
            <SiderPanel />
            <Layout>
              {/* <Header style={{ background: '#fff', width: "100vw" }} /> */}
              <Content className="main-map">
                <MapComponent />
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
