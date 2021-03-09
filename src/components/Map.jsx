import React from "react";
import L from 'leaflet';
import { Map, 
  TileLayer, 
  Marker, 
  Popup, 
  ZoomControl,
  MapContainer} from "react-leaflet";
import Basemap from './Basemaps';
import GeojsonLayer from '../layers/GeojsonLayerFunc';
import '../css/Map.css';
import { connect } from "react-redux";
import logo from '../assets/logo.jpg'
// specify the path to marker files
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
// L.Icon.Default.imagePath = {};

class MapComponent extends React.Component {
  state = {
    lat: 42.657571,
    lng: 21.162665,
    zoom: 16,
    basemap: 'dark',
  };

  onBMChange = (bm) => {
    this.setState({
      basemap: bm
    });
  }

  render() {
    // console.log(this.props);
    const layersTypes = {
      'geojson': GeojsonLayer,
      
     
    }
    let center = [this.state.lat, this.state.lng];

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }

    return (
        <MapContainer
          zoomControl={false}
          zoom={this.state.zoom}
          center={center}
          minZoom={15}
          

          className="map">
            
          <ZoomControl position={'bottomright'} />
          
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={basemapsDict[this.state.basemap]}
          />
          <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />

          {this.props.layers.map( l => {
            if (l.visible) {
              let LayerComp = layersTypes[l.type];
              return (
                <LayerComp key={l.id} {...l.options}/>
              )
            }
          })}

        
          <Marker position={center}>
            {/* <Popup><div>Topic selected {this.state.basemap}</div></Popup> */}
            <Popup><div>Pika referente </div></Popup>
          </Marker>
        </MapContainer>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    layers: state.layers
  };
};

export default connect(mapStateToProps)(MapComponent);