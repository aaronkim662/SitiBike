import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends React.Component {

  makeApi = async() => {
    let url = 'http://feeds.citibikenyc.com/stations/stations.json'
    let data = await axios(url)
    console.log(data)
  }
  componentDidMount() {
    this.makeApi()
  }
  render(){
  return (
    <div className="App">

    </div>
  );
}
}

export default App;
