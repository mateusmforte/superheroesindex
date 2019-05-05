import React from 'react';

export default class HeroAppearance extends React.Component{
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
