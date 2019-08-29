import React from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl, FullscreenControl} from 'react-map-gl'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Form from './Form'

// setLocated({ latitude:viewport.latitude })
//  setLocated({longitude:viewport.longitude})

function Search(props){
  // current viewing of map
  const[viewport, setViewport] = React.useState({
    latitude: 40.740552,
    longitude: -73.987172,
    width: '100%',
    height: '80vh',
    zoom: 12
  });
  // selected button on map
  const[selected,setSelected] = React.useState({
    showPopup: false,
    latitude: 40.7403432,
    longitude: -73.98955109,
  });
  // iterate through api and return values to push to Nearby
  const[mapData,setMapData] = React.useState('');
  // geolocation
  const[located,setLocated] = React.useState('');
    React.useEffect(() => {
      setMapData(props.info.map((loc) => {
        return {
              key: loc.id,
              place: loc.stAddress1,
              docks: loc.availableDocks,
              bikes: loc.availableBikes,
              latitude: loc.latitude,
              longitude: loc.longitude
          }
        }));
    },[located])

  const handleSubmit = (val) => {
    setLocated(val)
    setViewport({
      latitude: val.latitude,
      longitude: val.longitude,
      width: '100vw',
      height: '100vh',
      zoom: 16
    })
  }
  const handleClick = (e) => {
    console.log('event', e)
    if(e) {
   setLocated({
        latitude: viewport.latitude,
        longitude: viewport.longitude
      })
    }
    console.log('located1', located)

  }
    console.log('geo view', viewport.latitude, viewport.longitude)
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

      {props.info.map((d,i) => {

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
            <img src={require('./citi.svg')} alt='citibike' className='imgBike'
              />
          </button>
        </Marker>
        )
      })}
    {selected.showPopup &&
    <Popup className='popup'
      latitude={selected.latitude}
      longitude={selected.longitude}
      closeButton={true}
      closeOnClick={false}
      onClose={() => setSelected({showPopup: false})}
      >
      <div className='back1'>
        <img src={require('./PowerMap.png')} alt='pin'
          className='popupImg'/>
        <h4 className='back1h4'>{selected.place}</h4>
        <div className='back2'>
        <h5 className='back2h5'>Available Bikes: {selected.bikes}</h5>
        <h5 className='back2h5'>Number of Docks: {selected.docks}</h5>
        </div>
    </div>
    </Popup>
  }
    <GeolocateControl className='geoLocate'
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}

      />
    <div className='control'>
      <NavigationControl />
      <FullscreenControl />
    </div>
  </ReactMapGL>
</React.Fragment>
  )
}
export default Search;
