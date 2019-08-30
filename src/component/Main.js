import React from 'react'
import Search from './Search'
import Home from './Home'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

class Main extends React.Component {
  state = {
    list:[],
  }

  makeApi = async() => {
    let url = 'https://cors-anywhere.herokuapp.com/http://feeds.citibikenyc.com/stations/stations.json'
    let data = await axios(url)
    this.setState({
      list: data.data.stationBeanList
    })
  }

  componentDidMount() {
    this.makeApi()
  }

  render(){
    
  return (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/search'
      render={(props) => <Search {...props}
      info={this.state.list} /> } />
    </Switch>
  </main>
    )
  }
}
export default Main;
