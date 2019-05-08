import React from 'react';
import history from '../history';
import {Redirect} from 'react-router-dom';

export default class FavoriteItem extends React.Component{
    constructor(){
        super();
        this.unfavorite = this.unfavorite.bind(this);
        this.showProfile = this.showProfile.bind(this);
        
    }
    unfavorite(){
        
    }
    showProfile(){
        this.props.history.push(`/profile/${this.props.hero.id}`);
       /*  {`/profile/${this.props.hero.id}`}/>; */
    }
    render(){
        return (
            <div key={this.props.hero.id} className="favorite-hero">
                <i className="remove-button far fa-times-circle" onClick={()=> this.unfavorite(this.props.hero.id)}/>
                <div onClick={() => this.showProfile(this.props.hero.id)}>
                    <img 
                    className="favorite-image"
                    src={this.props.hero.img}
                    alt=""
                    />
                    <span className="favorite-name">{this.props.hero.heroname}</span>
                </div>
            </div>
        )
    }
}