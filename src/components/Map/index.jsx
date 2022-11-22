import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 13.672214,
      lng:  -89.292546
    },
    zoom: 20
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={13.672214}
          lng={-89.292546}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;