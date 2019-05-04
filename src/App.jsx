import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import NavBar from './components/NavBar';
import ListHeroes from './components/ListHeroes';
import MainMenu from './components/MainMenu';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
      </div>
      <div className="content">
          <Route exact path="/" component={MainMenu}/>
          <Route path="/listheroes" component={ListHeroes}/>
          <Route path="/profile/:id" component={Profile}/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
