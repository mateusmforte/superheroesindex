import React from 'react';

export default class HeroBiography extends React.Component{
    render(){
        return(
            <div className="biography-area">
                <section id="biography">
                <div className="profile-content">
                    <h2>{this.props.fullname}</h2>

                    <label htmlFor="alter-egos">Alter egos:</label>
                    <ul id="alter-egos">
                       <li>{this.props.alteregos}</li>
                    </ul> 

                    <label htmlFor="aliases">Aliases:</label>
                    <ul id="aliases">
                        {this.props.aliases.map(aliase =>
                             <li>{aliase}</li>
                        )}
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