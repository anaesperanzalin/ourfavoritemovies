import React from 'react';
import logo from './logo.svg';
import './App.css';

const profiles = [
{id: 1,
  userID: '1',
  favoriteMovieID: '1',
},

{id: 2,
  userID: '2',
  favoriteMovieID: '2'

},

{id: 3,
  userID: '3',
  favoriteMovieID: '3'

}]

const users = {

1: {
  id: 1, 
  name: 'Ryan Trainor',
  userName: 'rptrainor',
},

2:{
  id:2,
  name: 'Ana Lin',
  userName: 'analin123',
},

3:{
  id: 3, 
  name: 'Jesus',
  userName: 'wwjd',
},
};

const movies = {
1: {
  id: 1,
  name: 'El Padrino'
},

2:{
id:2, 
name: 'Aladdin',

},

3:{
  id:3,
  name: 'the Chosen',
}



};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Here are Ryan and Ana's favorite movies.
      </p>

      <ul>

{profiles.map(profile => {
  const userName = users[profile.userID].name;
  const favMovieName = movies[profile.favoriteMovieID].name;

  return (
    /*
    You need to include the `key` property every time you create list
    elements in React. The key property is necessary because it enables
    React to perform reconciliation
    (https://reactjs.org/docs/reconciliation.html)
    */
    <li key={profile.id}>
      
      <p>{`${userName} really likes "${favMovieName}."`}</p>
    </li>
  );
})
}
</ul>



      </header>
    </div>
  );
}

export default App;
