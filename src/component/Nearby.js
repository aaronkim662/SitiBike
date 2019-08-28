import React from 'react'

class Nearby extends React.Component{
  state = {
    latitude: this.props.searched.latitude,
    longitude: this.props.searched.longitude,
  }

  render(){
    // let list = (this.props.mapData).reduce((loc,b) => {
    // Math.min(Math.pow(loc.latitude - this.state.latitude,2) + Math.pow(loc.longitude - this.state.longitude,2))
    // return (
    //   <div>loc.id</div>
    //   )
    // }
    // )


    return (
      <div>

      </div>
    )
  }
}
export default Nearby;
