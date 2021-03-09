import React from "react";
import Header from "./Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store/store";
import { Layout } from "antd";
import { Provider } from "react-redux";
import {
  AlignCenter,
  User,
  Target,
  Layers,
  MapPin,
  BarChart2,
} from "react-feather";
import { CenterFocusStrong } from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import logo from "../assets/logo2.jpg";
import ComputerIcon from "@material-ui/icons/Computer";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
const { Content } = Layout;
const Styles = {
  // color: "blue",
};

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            // backgroundColor: "#cfe8fc",
            height: "auto",
            fontSize: "20px",
            marginTop: "20px",
          }}
          variant="h3"
        >
          <GroupIcon /> Ekipi punues
          <Divider style={{ marginTop: "6px" }} />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
            }}
          >
            <RotateLeftIcon /> Udhëheqëset e projektit:
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "15px",
              lineHeight: "20px",
              marginTop: "20px",
              marginLeft: "28px",
            }}
          >
            Gresa Neziri & Donika Çapriqi
          </div>
          <Divider style={{ marginTop: "12px" }} />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
            }}
          >
            <ComputerIcon /> Dizajnimi dhe zhvillimi i Uebfaqes:
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "15px",
              lineHeight: "20px",
              marginTop: "20px",
              marginLeft: "28px",
            }}
          >
            Edona Haziraj, Software Engineer (
            <a href="https://github.com/EdonaHaziraj">Github</a>)
          </div>
          <Divider style={{ marginTop: "12px" }} />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
            }}
          >
            <BookmarkBorderIcon /> Mbështetur nga:
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "15px",
              lineHeight: "20px",
              marginTop: "20px",
              marginLeft: "28px",
            }}
          >
            CRD dhe FLOSSK
          </div>
          <Divider style={{ marginTop: "12px" }} />
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
