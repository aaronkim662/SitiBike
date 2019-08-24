import React from 'react';
import './App.css';
import Header from './component/Header'
import Main from './component/Main'
import 'mapbox-gl/dist/mapbox-gl.css';



function App() {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}


export default App;
