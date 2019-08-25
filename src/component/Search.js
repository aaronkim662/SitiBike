import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'


function Search(props){


  const[viewport, setViewport] = React.useState({
    latitude: 40.740552,
    longitude: -73.987172,
    width: '100w',
    height: '100vh',
    zoom: 12
  });

  const[selected,setSelected] = React.useState({
    showPopup: true,

    latitude: 40.740552,
    longitude: -73.987172,
  });

  return (
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle='mapbox://styles/ak662/cjzoyir3f1mnb1cmzvofnhu9u'
    onViewportChange={viewport => {
      setViewport(viewport)
    }}>
    {props.info.map((d,i) => {
      return(
      <Marker key={d.id}
              latitude={d.latitude}
              longitude={d.longitude}>
              <button onClick={(e) => {
                  e.preventDefault();
                  setSelected({
                    place: d.stAddress1,
                    docks: d.availableDocks,
                    bikes: d.availableBikes,
                    latitude: d.latitude,
                    longitude: d.longitude
                  })
                  console.log({selected})
                }}>
              </button>
      </Marker>
    )
    })}

    <Popup
      latitude={selected.latitude}
      longitude={selected.longitude}
      closeButton={true}
      closeOnClick={false}

      >
      <div>
        <h4>{selected.place}</h4>
        <h5>Bikes: {selected.bikes}</h5>
      <h5>Docks: {selected.docks}</h5>
    </div>
    </Popup>

    </ReactMapGL>
  )

}

export default Search;
