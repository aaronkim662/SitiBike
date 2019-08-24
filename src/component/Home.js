import React from 'react';

function Home (){
  let divStyle = {
    textAlign: 'center',
    fontSize: '30px'
  }
  // insert fun image here
  return (
    <React.Fragment>
  <div style={divStyle}>Siti Bike is a website for users to search available bicycles.</div>

   <div>This platform is absolutely free. </div>
   </React.Fragment>
  )
}
export default Home;
