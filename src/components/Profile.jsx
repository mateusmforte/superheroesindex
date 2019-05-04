import React from 'react';
import '../css/profile.css';

class HeroName extends React.Component{
    render(){
        return(
            <div className="name-area">
                <h1>{this.props.heroname}</h1>
                <hr/>
            </div>
        )
    }
}

class HeroAppearance extends React.Component{
    render(){
        return(
            <div className="appearance-area">
                <section id="appearance">
                    <img src={this.props.heroimage} alt="Hero Profile"/>
                    <ul>
                        <li>Gender:<span>{this.props.gender}</span></li>
                        <li>Race:<span>{this.props.race}</span></li>
                        <li>Height:<span>{this.props.height}</span></li>
                        <li>Eye Color:<span>{this.props.eyecolor}</span></li>
                        <li>Hair Color:<span>{this.props.haircolor}</span></li>
                    </ul>
                </section>
            </div>
            
        )
    }
}

class HeroBiography extends React.Component{
    render(){
        return(
            <div className="biography-area">
                <section id="biography">
                <div className="profile-content">
                    <h2>{this.props.fullname}</h2>
                    <label htmlFor="alter-egos">Alter egos:</label>

                    <ul id="alter-egos">
                        <li>Alter ego 1</li>
                        <li>Alter ego 2</li>
                        <li>Alter ego 3</li>
                    </ul>

                    <label htmlFor="aliases">Aliases:</label>
                    <ul id="aliases">
                            <li>Aliase 1</li>
                            <li>Aiase 2</li>
                            <li>Aliase 3</li>
                    </ul>

                    <label htmlFor="place-of-birth">Place of Birth:
                        <span id="place-of-birth">{this.props.placeofbirth}</span>
                    </label>
                    

                    <label htmlFor="first-appearance">First appearance:
                        <span id="first-appearance">{this.props.firstappearance}</span>
                    </label>
                    

                    <label htmlFor="publisher">Publisher:
                        <span id="publisher">{this.props.publisher}</span>
                    </label>
                    

                    <label htmlFor="alignment">Alignment:
                        <span id="alignment">{this.props.alingment}</span>
                    </label>
                </div>
            </section>
        
                
        
            <section id="work">
                <div className="profile-content">
                        <label htmlFor="occupation">Occupation:
                            <span id="occupation">{this.props.occupation}</span>
                        </label>
                        <label htmlFor="base">Base:
                            <span id="base">{this.props.base}</span>
                        </label>
                </div>
            </section>

            <section id="connections">
                <div className="profile-content">
                    <label htmlFor="group-affiliation">Group Affiliation:
                        <span id="group-affiliation">{this.props.group}</span>
                    </label>
                    <label htmlFor="relatives">Relatives:
                        <span id="relatives">{this.props.relatives}</span>
                    </label>
                </div>
            </section>
        </div>
        )
    }
}

class HeroStatus extends React.Component{
    render(){
        return(
            <div className="status-area">
              <section id="power-status">
                <table>
                    <tbody>
                    <tr>
                    <td>Inteligence</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>Strength</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>Speed</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>Durability</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>Power</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>Combat</td>
                    <td>--</td>
                    </tr>
                    </tbody>
                </table>
             </section>
            </div>
        )
    }

}

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
            console.log(hero.image)
        }
           
        );
       
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
                            placeofbirth={this.state.hero.biography['place-of-birth']}
                            firstappearance={this.state.hero.biography['first-appearance']}
                            publisher={this.state.hero.biography.publisher}
                            alingment={this.state.hero.biography.alingment}
                            occupation={this.state.hero.work.occupation}
                            base={this.state.hero.work.base}
                            group={this.state.hero.connections['group-affiliation']}
                            relatives={this.state.hero.connections.relatives}
                       />
                        <HeroStatus/>
                    </main>
                }
            </div>
        );
    }
}