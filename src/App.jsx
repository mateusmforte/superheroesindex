import React from 'react';
import ListHeroes from './components/ListHeroes';
import MainMenu from './components/MainMenu';
import {BrowserRouter,Route,IndexRoute} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <IndexRoute component={MainMenu}/>
      <Route path="/listheroes" component={ListHeroes}/>
    </BrowserRouter>
  );
}

export default App;
