import React, { useState, useEffect} from 'react';
import { Marker, FeatureGroup, Popup } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import {Light} from 'react-feather'
var fetchData = function fetchData(url, options) {
  let request = fetch(url, options);

  return request
    .then(r => r.json())
    .then(data => data.features);
}

export default function GeojsonLayer ({url, cluster}) {
  const [data, setData] = useState([]);

  useEffect(()=> {
    if (url) {
      const abortController = new AbortController();

      fetchData(url, { signal: abortController.signal }).then(data => {
        setData(data);
      });

      // cancel fetch on component unmount
      return () => {
        abortController.abort();
      };
    }

  }, [url]);

  var GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;

  // console.info(data);
  return (
      <GroupComponent>
        {data.map(f => (
            <Marker
              key={JSON.stringify(f.properties)}
              position={f.geometry.coordinates.reverse()}
            >
              <Popup minWidth={200} closeButton={false}>
                <div style={{backgroundColor:"white", color:"blue"}}>
                  {/* <b>Hello</b> */}
  
             <p> Kjo pikë gjendet në lagjen {f.properties.Lagja} <br></br> dhe ka latitudë {f.geometry.coordinates[0]} dhe longitudë {f.geometry.coordinates[1]} </p>
              </div>
              </Popup>
            </Marker>
        ))}
      </GroupComponent>
  );
}