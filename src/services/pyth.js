// 2 parameters/ bikes array
//bikes array contain lat long docks/bikes
//geolocation lat long

//1st map through
//2nd apply the algorithm: pythagorean theorem
//returns an array that has pyth value
//sort by the shortest to longest

// return the shortest
// lat long bikes and docks

const pyth = (bikes, geo) => {
  let list = bikes.map((bike) => {
    bike.py = Math.pow(bike.latitude - geo.latitude,2) + Math.pow(bike.longitude - geo.longitude,2)
  })
  let filter = bikes.sort((a,b) => a.py - b.py)
  return bikes[0]
}


export default pyth;
