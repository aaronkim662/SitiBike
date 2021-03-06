import React from 'react';
import axios from 'axios'

class Form extends React.Component {
state ={
  value: '',
  location: '',
  latitude: '',
  longitude:''
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.location();
  }

  // not needed, only to verify value is being changed
  handleChange = (e) => {
     this.setState({
       value: e.target.value
     })
  }

  location = async () =>{
    let formValue = this.state.value.split(' ').join('+');
    let base1 = '&city=NewYorkCity&state=NY&api_key=';
    let final = `https://api.geocod.io/v1.3/geocode?street=${formValue + base1 + process.env.REACT_APP_GEOCODE_TOKEN}`;
    let coords = await axios(final);
    this.setState({
      location: coords,
      latitude: coords.data.results[0].location.lat,
      longitude: coords.data.results[0].location.lng
    })
  }

  componentDidMount(){
    this.location()
  }

  render(){

  return (
      <form className='form'
        onSubmit={this.handleSubmit}>
        <input className='inputForm'
          type='text'
          placeholder='Address and Borough'
          value={this.state.value}
          onChange={this.handleChange}/>
        <button className='btnForm'
          value='Submit'>Search</button>
      </form>
    )
  }
}
export default Form;
