const bikesSort = (bikes, geo, selection) => {
  let list = bikes.map((bike) => {
    bike.py = Math.pow(bike.latitude - geo.latitude,2) + Math.pow(bike.longitude - geo.longitude,2)
    bike.fraction = bike.bikes / bike.docks;
    return bike;
  })
  let shortest = list.sort((a,b) => a.py - b.py)
  let bikeFilter = shortest.filter((ele,i) => i < 10)
  console.log('bikeFilter', bikeFilter)
  let bikeSort = bikeFilter.sort((a,b) => b.fraction - a.fraction)
  console.log('bike', bikeSort[0])

  return bikeSort[0]
}

export default bikesSort;
