import { Light } from "react-feather";
import sun from "../assets/sun.svg";
import logo from "../assets/logo.jpg";

const INITIAL_STATE = [
  {
    id: "geojson",
    name: "Ndriçimi rrugor",
    // icon: { logo },
    type: "geojson",
    description: "Të dhënat e shpërndara sipas ndriçimit publik",
    options: {
      url: "./places.json",
      cluster: true,
    },
    visible: true,
    toggleable: true,
  },
  {
    id: "geojson1",
    name: "Niveli i zhurmës",
    type: "geojson",
    description:
      "Të dhënat e shpërndara sipas vlerave: 50 deri në 70 dB (deciBel)",
    options: {
      url: "./zhurma.json",
      cluster: true,
    },
    visible: false,
    toggleable: true,
  },
  // {
  //   id: "geojson",
  //   name: "Ndriçimi publik",
  //   type: "geojson",
  //   description: "Të dhënat e shpërndara sipas ndriçimit publik",
  //   options: {
  //     url: "./places.json",
  //     cluster: true,
  //   },
  //   visible: false,
  //   toggleable: true,
  // },
  // {
  //   id: "geojson",
  //   name: "Ndriçimi publik",
  //   type: "geojson",
  //   description: "Të dhënat e shpërndara sipas ndriçimit publik",
  //   options: {
  //     url: "./places.json",
  //     cluster: true,
  //   },
  //   visible: false,
  //   toggleable: true,
  // },
  {
    id: "geojson5",
    name: "Mbikëqyrja me kamera (Të dhënat në përpunim e sipër)",
    type: "geojson",
    description: "Të dhënat e shpërndara sipas kamerave publike",
    options: {
      url: "./kamera.json",
      cluster: true,
    },
    visible: false,
    toggleable: true,
  },
  {
    id: "geojson3",
    name: "Afërsia me shërbime/ndërtesa (Të dhënat në përpunim e sipër)",
    type: "geojson",
    description: "Të dhënat e shpërndara sipas raportimeve për ngacmim",
    options: {
      url: "./null.json",
      cluster: true,
    },
    visible: false,
    toggleable: true,
  },
  {
    id: "geojson4",
    name: "Lartësia e ndërtesave përreth  (Të dhënat në përpunim e sipër)",
    type: "geojson",
    description: "Të dhënat e shpërndara sipas raportimeve për ngacmim",
    options: {
      url: "./null.json",
      cluster: true,
    },
    visible: false,
    toggleable: true,
  },
  {
    id: "geojson6",
    name: "Depërtueshmëria vizuale (Të dhënat në përpunim e sipër)",
    type: "geojson",
    description: "Të dhënat e shpërndara sipas raportimeve për ngacmim",
    options: {
      url: "./null.json",
      cluster: true,
    },
    visible: false,
    toggleable: true,
  },
  {
    id: "geojson7",
    name: "Ngacmimet (Të dhënat në përpunim e sipër)",
    type: "geojson",
    description: "Të dhënat e shpërndara sipas raportimeve për ngacmim",
    options: {
      url: "./null.json",
      cluster: true,
    },
    visible: false,
    toggleable: true,
  },
];

export default function (state = INITIAL_STATE, action) {
  // console.log(action);
  switch (action.type) {
    case "TOGGLE_LAYER":
      return state.map((l) => {
        if (l.id === action.payload.id) {
          l.visible = action.payload.visibility;
        }
        return l;
      });
    default:
      return state;
  }
}
