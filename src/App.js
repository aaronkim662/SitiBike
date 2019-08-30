import React from 'react';
import './App.css';
import Header from './component/Header'
import Main from './component/Main'
import 'mapbox-gl/dist/mapbox-gl.css';
import Footer from './component/Footer'


function App() {
  
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Main />
      </div>
      <Footer />
    </div>
  );
}
export default App;
