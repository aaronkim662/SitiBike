# Project Overview


## Project Description

Siti-Bike

Users will be able to locate Citi bikes by the api provided.The website will display how many bikes are available as well as how many docks are present.

## Wireframes

https://cloudinary.com/console/media_library/asset/manage/summary/image/upload/Images%2Fp2wireframe

Revised Wireframe
https://cloudinary.com/console/media_library/asset/image/upload/Images/p2wireframe3

## API

http://feeds.citibikenyc.com/stations/stations.json
This api contains an updated list of bikes, docks, and stations.

https://api.geocod.io/v1.3/geocode
This api converts street addresses and borough to latitude and longitude.

Example

makeApi = async() => {
    let url = 'https://cors-anywhere.herokuapp.com/http://feeds.citibikenyc.com/stations/stations.json'
    let data = await axios(url)
    console.table(data.data.stationBeanList);
  }
### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

The website will have an app, header, footer, home, form, search, and a main section. The necessary component will be the search component. Pre-MVP the user will be see and click on icons, which will display the available bikes and docks. There will be a function for the user to minimize and maximize the current map.

Post-MVP there will be an algorithm to inform the user of the nearest station or the nearest station that contains the most bikes, based on their current location. As well as, a search option for the user to visualize stations nearby.

#### MVP EXAMPLE
- Render all bikes
- Regularly updated
- Allow user to interact with the page

#### PostMVP EXAMPLE
- Geolocation/nearest best bike station
- Search option

## React Component Hierarchy

The parent is the App. Its children are the Main, Header, Footer, Search, and Home. The child of the Main is the Form. In the PostMVP, the Main component will have another child called Nearby.

## Components

| Component | Description |
| --- | :---: |  
| App | This will make the initial data pull and include React Router|
| Header | This will render the header including the nav |
| Footer | This will render the footer which will include my name and copyright |
| Home | This will render the home section; to introduce the users to the website. |
| Form | The form will render a search bar for users to input addresses and zip codes. |
| Search | This will render an interactive map and be the main component of the entire website. |
| Main | This will render out the route paths. |


##Project Process

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building skeleton | M | 30 Mins | 20 Mins | 20 Mins |
| Working with API | H | 1 Hr | 30 Mins | 30 Mins
| Footer | L | 30 Mins | 5 Mins | 5 Mins |
| Header | L | 30 Mins | 10 Mins | 10 Mins |
| About | L | 30 Mins | Erased | |
| Building a map | H | 2 hr | 3 hrs | 3 hrs |
| Adding functions | H | 2 Hr | 1 Hr | 1 Hr |
| Displaying data | H | 1 Hr | 10 Mins | 10 Mins |
| MVP Total Time | H | 8 Hr | 5 Hr 15 Mins |
| PostMVP | | | |
| Add zoom in and out | L | 1 Hr | 30 Mins | 30 Mins
| Working with geoLocate API | H | 2 Hr | 4 Hr | 4 Hr
| Search Form | H | 2hr | 1 Hr | 1 Hr |
| Enable radius markers | H | 2 Hr | Erased | |
| Set up algorithm | H | 2 Hr | 10 mins | 10 Mins
| Display nearby | H | 2 Hr | 4 Hr | 4 Hr |
| PostMVP | H | 11 Hr | 9 Hr 40 Mins | 9 Hr 40 Mins |


## Additional Libraries
 -axios
 -mapbox
 -react-map-gl

## Code Snippet

const handleSubmit = (val) => {
  setLocated(val)
  setViewport({
    latitude: val.latitude,
    longitude: val.longitude,
    width: '100vw',
    height: '100vh',
    zoom: 16
  })

## Description
  This code uses the users input in the search form and sets up the map so that it zooms to that location.

## Issues and Resolutions

 Major Issues:
 -Getting the map to render : Restart Client ('-')
 -Applying geolocation into the app without complicating the structure of the current search component : Applied more react map gl effects
 (functional to class)
 -Troubleshooting the algorithm to display the correct information

## Questions needed
Github Repo: https://github.com/aaronkim662/website_api