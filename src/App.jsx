import React from 'react';
import ListHeroes from './components/ListHeroes';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Route path="/listheroes" component={ListHeroes}/>
    </BrowserRouter>
  );
}

export default App;
