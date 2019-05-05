import React from 'react';
import {RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,Legend,ResponsiveContainer} from 'recharts';
export default class HeroStatus extends React.Component{
    constructor(props){
        super();
        this.state = {
            powers : [
                {
                    "power" : "Intelligence",
                    "quantity" : parseInt(props.statusdata.intelligence)
                },
                {
                    "power": "Strength",
                    "quantity" : parseInt(props.statusdata.strength)
                },
                {
                    "power": "Speed",
                    "quantity":  parseInt(props.statusdata.speed)
                },
                {
                    "power": "Durability",
                    "quantity": parseInt(props.statusdata.durability)
                },
                {
                    "power": "Power",
                    "quantity": parseInt(props.statusdata.power)
                },
                {
                    "power": "Combat",
                    "quantity": parseInt(props.statusdata.combat)
                }
            ]
        }
    }
    render(){
        return(
            <div className="status-area">
                  <section id="power-status">
                
                    <RadarChart  width={300} height={250} data={this.state.powers}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="power"/>
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar dataKey="quantity" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart> 
                    <table>
                        <tbody className="powers-legend">
                            <tr className="powers-legend-icons">
                                <td><img alt="Intelligence"className="power-icons" src={require("../img/icons/intelecto.png")}/></td>
                                <td><img alt="Strength" className="power-icons" src={require("../img/icons/forca.png")}/></td>
                                <td><img alt="Speed" className="power-icons" src={require("../img/icons/velocidade.png")}/></td>
                                <td><img alt="Durability" className="power-icons" src={require("../img/icons/durabilidade.png")}/></td>
                                <td><img alt="Power" className="power-icons" src={require("../img/icons/poder.png")}/></td>
                                <td><img alt="Combat" className="power-icons" src={require("../img/icons/combate.png")}/></td>
                            </tr>
                            <tr className="powers-legend-text">
                                {
                                    this.state.powers.map(power=>
                                        <td className="power-text">{power.quantity}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                  </section>
            </div>
        )
    }

}

{/*<div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.3e14a18ed81ab7a06bb32003d3a4286d.1557010944136.1557010944136.1557010944136.1&__hssc=57440181.3.1557010944137&__hsfp=3667784326" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}