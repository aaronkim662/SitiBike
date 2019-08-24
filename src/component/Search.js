import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ReactMapGL, { Marker } from 'react-map-gl'

function Search(){

  const[viewport, setViewport] = React.useState({
    latitude: 40.740552,
    longitude: -73.987172,
    width: '100w',
    height: '100vh',
    zoom: 10
  });
  return (
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle='mapbox://styles/ak662/cjzoyir3f1mnb1cmzvofnhu9u'
    onViewportChange={viewport => {
      setViewport(viewport)
    }}>

    </ReactMapGL>
  )

}

export default Search;
