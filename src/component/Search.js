import React from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl, FullscreenControl} from 'react-map-gl'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Form from './Form'
import Nearby from './Nearby'
import Citi from './citi.svg'

// <Nearby viewport={viewport}
//         />
const markerStyle = {
  width: '10px',
  height: '10px'
}
const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '0px',
};

function Search(props){

  const[viewport, setViewport] = React.useState({
    latitude: 40.740552,
    longitude: -73.987172,
    width: '100vw',
    height: '100vh',
    zoom: 12
  });

  const[selected,setSelected] = React.useState({
    showPopup: false,
    latitude: 40.7403432,
    longitude: -73.98955109,
  });
  const[mapData,setmapData] = React.useState('');

  const[located,setLocated] = React.useState({
    array: []
  });


  const handleSubmit = (val) => {
    setLocated(val)
    setViewport({
      latitude: val.latitude,
      longitude: val.longitude,
      width: '100vw',
      height: '100vh',
      zoom: 16
    })
    console.log('search', val)
    return(
      <Marker
      latitude={val.latitude}
      longitude={val.longitude}
      radius={5}
        ><img src='' alt='search'/></Marker>
    )
  }

  // let list = props.info.map((loc) => {
  //   return(
  //     setmapData({
  //       [...array,
  //         place: loc.stAddress1,
  //         docks: loc.availableDocks,
  //         bikes: loc.availableBikes,
  //         latitude: loc.latitude,
  //         longitude: loc.longitude
  //       ]
  //     }
  //   ))}
  //   )

  console.log('mapdata', mapData)
  return (
    <React.Fragment>
    <Form onSubmit={handleSubmit}/>
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle='mapbox://styles/ak662/cjzoyir3f1mnb1cmzvofnhu9u'
    onViewportChange={viewport => {
      setViewport(viewport)
    }}>

    { props.info.map((d,i) => {

      return(
      <Marker key={d.id}
              latitude={d.latitude}
              longitude={d.longitude}

              >
              <button

                onClick={(e) => {
                  e.preventDefault();
                  setSelected({
                    place: d.stAddress1,
                    docks: d.availableDocks,
                    bikes: d.availableBikes,
                    latitude: d.latitude,
                    longitude: d.longitude,
                    showPopup: true
                  })
                }}>
                <img src={require('./citi.svg')} alt='citibike'
                  style={markerStyle}/>
              </button>
      </Marker>

    )
    })}
    { selected.showPopup &&
    <Popup
      latitude={selected.latitude}
      longitude={selected.longitude}
      closeButton={true}
      closeOnClick={false}
      onClose={() => setSelected({showPopup: false})}
      >
      <div>
        <h4>{selected.place}</h4>
        <h5>Available Bikes: {selected.bikes}</h5>
        <h5>Number of Docks: {selected.docks}</h5>
    </div>
    </Popup>
  }
  <div style={navStyle}>
    <GeolocateControl
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
    />
    <NavigationControl />
    <FullscreenControl />

  </div>
  </ReactMapGL>
</React.Fragment>
  )
}
export default Search;
