import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { Component } from "react";
import MapGL from "react-map-gl";

import Geocoder from "react-map-gl-geocoder";

//https://codesandbox.io/s/l7p179qr6m
//open sourced code from github displaying geocode

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
'pk.eyJ1IjoiYWs2NjIiLCJhIjoiY2p6b2luZHVuMGJtdDNnbnBldnl6a2x6NiJ9.AkXmtKaG6lb3xh19G6LzkQ';
class Test extends Component {
  state = {
    viewport: {
      latitude: 40.740552,
      longitude: -73.987172,
      zoom: 12
    },
    searchResultLayer: null,
    data: {
      showPopup: true,
      place: '',
      docks: '',
      bikes: '',
      latitude: '40.740552',
      longitude: '-73.987172'
    }

  };

  mapRef = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

    handleOnResult = event => {
      console.log('this is event',event.result);
      this.setState({
        searchResultLayer: new GeoJsonLayer({
          id: "search-result",
          data: event.result.geometry,
          getFillColor: [0, 150, 100, 0],
          getRadius: 500,
          pointRadiusMinPixels: 10,
          pointRadiusMaxPixels: 10
        })
      });
    };
  render() {
    const { viewport, searchResultLayer } = this.state;
    console.log('props', this.props)
    console.log('lats', this.state.data.latitude)
    console.log('data', this.state.data)
    return (
      <div style={{ height: "100vh" }}>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
        <Geocoder
          mapRef={this.mapRef}
          onResult={this.handleOnResult}
          onViewportChange={this.handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />

        </MapGL>
      </div>
    );
  }
}

export default Test
