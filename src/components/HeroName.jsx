import React from 'react';

export default class HeroName extends React.Component{
    render(){
        return(
            <div className="name-area">
                <h1>{this.props.heroname}</h1>
            </div>
        )
    }
}