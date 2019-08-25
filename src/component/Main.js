import React from 'react'
import Search from './Search'
import About from './About'
import Home from './Home'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

class Main extends React.Component {
  state = {
    list:[],
    latitude : [],
    longitude : []
  }
  makeApi = async() => {
    let url = 'https://cors-anywhere.herokuapp.com/http://feeds.citibikenyc.com/stations/stations.json'
    let data = await axios(url)
    this.setState({
      list: data.data.stationBeanList

    })
     //console.table(data.data.stationBeanList);
  }
  componentDidMount() {
    this.makeApi()
  }
  render(){
    // let list = (this.state.list).map((d,i) => {
    //   console.log()
    //   return (
    //     d.
    //   )
    // })
    console.log('state', this.state.list)
  return (
  <main>

    <Switch>
  
      <Route exact path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/search'
      render={(props) => <Search {...props}
      info={this.state.list} /> } />

    </Switch>
  </main>
    )
  }
}
export default Main;
