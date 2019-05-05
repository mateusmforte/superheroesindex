import React from 'react';
import HeroName from './HeroName';
import HeroAppearance from './HeroAppearance';
import HeroBiography from './HeroBiography';
import HeroStatus from './HeroStatus';

import '../css/profile.css';

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            hero : [{}],
            isLoading : true
        }
    }
    componentWillMount(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var urlIdHero = window.location.pathname.slice(9,15);

        fetch(proxyUrl + `https://superheroapi.com/api/2385494458138031/${urlIdHero}`)
            .then(results => results.json())
            .then(hero =>{
                this.setState({hero,isLoading:false})
            });
    }
    
    render(){
        return(
            <div>
                {this.state.isLoading && 
                    <div className="loading">Carregando Herói...</div>
                }
                {!this.state.isLoading && 
                    <main>
                        <HeroName heroname={this.state.hero.name}/>
                        <HeroAppearance
                            heroimage={this.state.hero.image.url}
                            gender={this.state.hero.appearance.gender}
                            race={this.state.hero.appearance.race}
                            height={this.state.hero.appearance.height}
                            eyecolor={this.state.hero.appearance['eye-color']}
                            haircolor={this.state.hero.appearance['hair-color']}
                        />
                        <HeroBiography
                            fullname={this.state.hero.biography['full-name']}
                            alteregos={this.state.hero.biography['alter-egos']}
                            aliases={this.state.hero.biography['aliases']}
                            placeofbirth={this.state.hero.biography['place-of-birth']}
                            firstappearance={this.state.hero.biography['first-appearance']}
                            publisher={this.state.hero.biography.publisher}
                            alingment={this.state.hero.biography.alingment}
                            occupation={this.state.hero.work.occupation}
                            base={this.state.hero.work.base}
                            group={this.state.hero.connections['group-affiliation']}
                            relatives={this.state.hero.connections.relatives}
                       />
                       <HeroStatus statusdata={this.state.hero.powerstats}/>
                    </main>
                }
            </div>
        );
    }
}