# Project Overview


## Project Description

Siti-Bike

Users will be able to locate Citi bikes via a search bar. The website will display how many bikes are available as well as how many docks are present.

## Wireframes

https://cloudinary.com/console/media_library/asset/manage/summary/image/upload/Images%2Fp2wireframe

Revised Wireframe
https://cloudinary.com/console/media_library/asset/image/upload/Images/p2wireframe3

## API

Provide a description and link to the API you have chosen for your project.
http://feeds.citibikenyc.com/stations/stations.json

Provide a small code sample of the returned data that you will use to build your app.

makeApi = async() => {
    let url = 'https://cors-anywhere.herokuapp.com/http://feeds.citibikenyc.com/stations/stations.json'
    let data = await axios(url)
    console.table(data.data.stationBeanList);
  }
### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

The website will have a header, footer, home, form, about, search, and a main section. The necessary component will be the search component. Pre-MVP the user will be able to search for bikes either by zip code or address. There will be a function for the user to minimize and maximize the current map.

Post-MVP there will be an algorithm to inform the user of the nearest and best station. There should be a highlighted radius of how far the station should be.

#### MVP EXAMPLE
- Render all bikes
- Regularly updated
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Geolocation/nearest best bike station


## React Component Hierarchy

Define the the React components and the architectural design of your app.

The parent is the App. Its children are the Main, Header, Footer, About, and Home. The child of the Main is the Form. In the PostMVP, the Main component will have another child called Nearby.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |  
| App | This will make the initial data pull and include React Router|
| Header | This will render the header including the nav |
| Footer | This will render the footer which will include my name and copyright |
| About | This will render an about section describing the website. |
| Home | This will render the home section; to introduce the users to the website. |
| Form | The form will render a search bar for users to input addresses and zip codes. |
| Search | This will render an interactive map and be the main component of the entire website. |
| Main | This will render out the route paths. |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building skeleton | M | 30 Mins | 20 Mins |
| Working with API | H | 1hr | .5hr |
| Footer | L | .5hr |
| Header | L | .5hr | .5hr |
| About | L | .5hr | .5hr |
| Building a map | H | 2hr | 3hrs |
| Adding functions | H | 2hr |
| Working with two API's | H | 2hr |
| Displaying data | H | 1hr | .5hr |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.
 -axios
 -ReactStrap
 -mapbox
 -react-map

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Questions needed
Styling the buttons
Adding close function
Not including popup at loading
PostMVP
Adding form to overlap map and where to put it
