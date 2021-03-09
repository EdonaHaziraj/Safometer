import React from "react";
import Header from "../../components/Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store/store";
import { Layout } from "antd";
import { Provider } from "react-redux";
import pagenotfound from "../../assets/pagenotfound.png";

const { Content } = Layout;
const NotFoundRoute = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="app"> */}

        <Header />
        {/* </div> */}

        <div>
          <img src={pagenotfound}></img>
        </div>
      </Router>
    </Provider>
  );
};

export default NotFoundRoute;
