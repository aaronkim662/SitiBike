import React from 'react';
import Background from '../citi.jpg';


function Home (){
  let divStyle = {
    height: '50vh',
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '30px',
  }
  let divBack = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
  }
  // insert fun image here
  return (
    <React.Fragment>
      <div className="back" style={divBack}>
  <div style={divStyle}>Siti Bike is a website for users to search available bicycles.</div>

   <div>This platform is absolutely free. </div>
   </div>
   </React.Fragment>
  )
}
export default Home;
