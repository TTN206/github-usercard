import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const api = axios.get( "https://api.github.com/users/TTN206" );
// console.log( api );
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const entryPoint = document.querySelector( ".cards" );
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// axios
//   .get("https://api.github.com/users/TTN206")
//   .then(( res ) => {
//     // console.log( res.data, "dis is the response"); // i need to invoke the data
//     const info = response.data.message;
//     info.forEach(( image ) => {
//       const card = githubCardMaker({ obj });
//       console.log( card );
//       entryPoint.append( card );
//   })
//   .catch(( err ) => {
//     console.log( err, "dis is an error");
//   });

axios
  .get("https://api.github.com/users/TTN206")
  .then(( res ) => {
    const info = res.data;
    entryPoint.appendChild( githubCardMaker( info ));
  })
  .catch()
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
followersArray.forEach( att => {
  axios
  .get(`https://api.github.com/users/${att}`)
  .then(( res ) => {
    const info = res.data;
    entryPoint.appendChild( githubCardMaker( info ));
  })
  .catch()
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubCardMaker ( obj ) {
// instantiating the elements
  const card = document.createElement( "div" );
  const img = document.createElement( "img" );
  const cardInfo = document.createElement( "div" );
  const name = document.createElement( "h3" );
  const login = document.createElement( "p" );
  const locInfo = document.createElement( "p" );
  const profileInfo = document.createElement( "p" );
  const address = document.createElement( "a" )
  const followersCard = document.createElement( "p" );
  const followingCard = document.createElement( "p" );
  const bioCard = document.createElement( "p" );
// setting class names, attributes and text
  card.classList.add( "card" );
  cardInfo.classList.add( "card-info" );
  name.classList.add( "name" );
  login.classList.add( "user-name" );

  img.src = obj.avatar_url;
  login.textContent = obj.login;
  name.textContent = obj.name;
  locInfo.textContent = `Location: ${ obj.location }`;
  address.href = obj.html_URL;
  profileInfo.textContent = `Profile: ${ address }`;
  followersCard.textContent = `Followers: ${ obj.followers }`;
  followingCard.textContent = `Following: ${ obj.following }`;
  bioCard.textContent = `Bio: ${ obj.bio }`;
// append the info, creating the hierarchy
  card.appendChild( img );
  card.appendChild( cardInfo );
  cardInfo.appendChild( name );
  cardInfo.appendChild( locInfo );
  cardInfo.appendChild( login );
  cardInfo.appendChild( profileInfo );
  profileInfo.appendChild( address );
  cardInfo.appendChild( followersCard );
  cardInfo.appendChild( followingCard );
  cardInfo.appendChild( bioCard );
//  return the card:
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
