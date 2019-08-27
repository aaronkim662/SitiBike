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
    console.log('from form', this.state.value)
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
    let key = '258c6fc642ec22506d0d263e55ef02566d55f88';
    let final = `https://api.geocod.io/v1.3/geocode?street=${formValue + base1 + key}`;
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
      <form onSubmit={this.handleSubmit}>
        <input type='text'
          placeholder='zipcode or address here'
          value={this.state.value}
          onChange={this.handleChange}/>
        <button value='Submit'></button>
      </form>
    )
  }
}
export default Form;
