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

const { Content } = Layout;
const Styles = {
  // color: "blue",
};

const About = () => {
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
          <img src={logo} />
          Çka paraqet platforma Safometër?
          <Divider style={{ marginTop: "6px" }} />
          <div
            style={{
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
              marginTop: "12px",
            }}
          >
            Safometer është plaftormë digjitale që e bën mbledhjen, analizën dhe
            hartëzimin e të dhënave të nevojshme për matjen e indikatorëve të
            sigurisë në hapësirat publike.
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
            }}
          >
            Qëllimi i kësaj platforme është përmirësimi i përvojës së qytetarëve
            në hapësirat publike duke e vënë theksin te një prej elementeve
            thelbësore, që është siguria e tyre. Kjo platformë ka dalë fituese
            nga gara e EqualiTECH e organizuar nga CRD dhe FLOSSK.
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "20px",
              lineHeight: "20px",
            }}
          >
            <Target /> Krijo indeksin tënd
          </div>
          <Divider style={{ marginTop: "12px" }} />
          <div
            style={{
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
              marginTop: "20px",
            }}
          >
            Përdoruesit e platformës do të mund të gjenerojnë në mënyrë
            automatike indexin e tyre të sigurisë përmes kualifikimit të
            indikatorëve sipas nevojave të tyre specifike që lidhen me përvojen
            e tyre subjektive. Në këtë mënyrë ata do të kenë më të lehtë t’i
            shmangin rreziqet apo t’i gjejnë hapësirat më të sigurta për ta. Ne
            do të punojmë që kjo platformë t’i akomodoj nevojat e sa më shumë
            njerëzve përmes diversifikimit dhe përpunimit në vazhdimësi të
            indikatorëve në vecanti duke i marrë parasyshë imputet e grupeve të
            margjinalizuara të shoqërisë që njëkohësisht janë më të rrezikuar në
            hapësira publike.
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "20px",
              lineHeight: "20px",
            }}
          >
            <BarChart2 /> Metodologjia
          </div>
          <Divider style={{ marginTop: "12px" }} />
          <div
            style={{
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
              marginTop: "20px",
            }}
          >
            Të dhënat që do të prezantohen në këtë platformë janë rezultat i
            matjeve sistematike të indikatorëve objektiv dhe indikatorëve
            subjektiv. Për matjen e indikatorëve subjektiv në shumicën e rasteve
            do të shërbehemi me imputet e qytetarëve të dhënë derjtëpërdrejtë në
            platformë, ndërsa për indikatorët objektiv, përveç raportimeve, do
            të fascilitojmë procese të mbledhjes dhe hartëzimit që të arrijmë
            matjen sa më të saktë të tyre.
          </div>
          <div
            style={{
              marginBottom: "12px",
              fontSize: "20px",
              lineHeight: "20px",
            }}
          >
            <MapPin /> Elementet e hartës
          </div>
          <Divider style={{ marginTop: "12px" }} />
          <div
            style={{
              marginBottom: "12px",
              fontSize: "17px",
              lineHeight: "20px",
              marginTop: "20px",
            }}
          >
            Të gjitha elementet fizike të hapësirave publike (trupat ndricues,
            institucionet publike, rrugët kryesore, kamerat e sigurisë ej) që
            shërbejnë si tregues për vlerësimin e cilësisë së saj si dhe imputet
            e drejtpërdrejta të qytetarëve në platformë, do të jenë të
            pozicionuara gjeografikisht në hartë.
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default About;
