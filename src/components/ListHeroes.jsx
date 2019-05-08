import React from "react";
import { Link } from "react-router-dom";
import heroesData from "../data/heroes.json";
import Error from "./Error";
import Search from "./Search";
import "../css/listheroes.css";

//const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export default class ListHeroes extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: heroesData,
      searchHeroes: []
    };
  }

  componentWillMount() {
    this.setState({ searchHeroes: this.state.heroes });
  }

  searchHeroes(event) {
    var updatedList = this.state.heroes;
    updatedList = updatedList.filter(
      item =>
        item.heroname.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
    );
    this.setState({ searchHeroes: updatedList });
  }

  /*   getHeroes(){
        for(var id=1; id<= 731; id++){
            fetch(proxyUrl + `https://superheroapi.com/api/2385494458138031/${id}`)
            .then(results => results.json())
            .then(results =>{
                this.setState({'heroes':results});
            })
        } 
    }  */

  render() {
    var listLength = this.state.searchHeroes.length;
    return (
        <main className="list-container">
          <Search onChange={this.searchHeroes.bind(this)} />
          {this.state.searchHeroes.length === 0 && (<Error error='notfound'/>)}
          <ul id="heroes-list">
            {this.state.searchHeroes.map(hero => (
              <Link
                to={`/profile/${hero.id}`}
                key={hero.id}
                className="hero-list-name"
              >
                {hero.heroname}
              </Link>
            ))}
          </ul>
        </main>
    );
  /*   if(this.props.auth.isAuthenticated()){
     
    }
    else{
      window.location.pathname = "/";
      return null;
    } */
  }
}
