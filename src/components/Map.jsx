import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "746px",
  };

  const center = {
    lat: 52.43981,
    lng: 16.943924,
  };

  const LatLng = {
    lat: 52.43981,
    lng: 16.943924,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAGHjPqYq_58HinXb5D5ZwTpOKMR_fuPzU",
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={LatLng} />
    </GoogleMap>
  ) : (
    <Spinner />
  );
};

export default Map;
