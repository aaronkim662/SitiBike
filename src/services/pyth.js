// 2 parameters/ bikes array
//bikes array contain lat long docks/bikes
//geolocation lat long

//1st map through
//2nd apply the algorithm: pythagorean theorem
//returns an array that has pyth value
//sort by the shortest to longest

// return the shortest
// lat long bikes and docks

const pyth = (bikes, geo, selection) => {
  if(selection === 'distance'){
    let list = bikes.map((bike) => {
      bike.py = Math.pow(bike.latitude - geo.latitude,2) + Math.pow(bike.longitude - geo.longitude,2)
      return bike;
    })
    let shortest = list.sort((a,b) => a.py - b.py);
    return shortest[0]
  }else{
    let list = bikes.map((bike) => {
      bike.py = Math.pow(bike.latitude - geo.latitude,2) + Math.pow(bike.longitude - geo.longitude,2)
      bike.fraction = bike.bikes / bike.docks;
      return bike;
    })
    let shortest = list.sort((a,b) => a.py - b.py)
    let bikeFilter = shortest.filter((ele,i) => i < 10)
    let bikeSort = bikeFilter.sort((a,b) => b.fraction - a.fraction)
    return bikeSort[0]
  }
}



export default pyth;
