import React from "react";
import {
  StatusArea,
  PowerTable,
  PowerTableIcons,
  PowerTableText,
  PowerIcon
} from "../css/Profile";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from "recharts";
export default class HeroStatus extends React.Component {
  constructor(props) {
    super();
    this.state = {
      powers: [
        {
          power: "Inteligência",
          quantity: parseInt(props.statusdata.intelligence)
        },
        {
          power: "Força",
          quantity: parseInt(props.statusdata.strength)
        },
        {
          power: "Velocidade",
          quantity: parseInt(props.statusdata.speed)
        },
        {
          power: "Resistência",
          quantity: parseInt(props.statusdata.durability)
        },
        {
          power: "Poder",
          quantity: parseInt(props.statusdata.power)
        },
        {
          power: "Combate",
          quantity: parseInt(props.statusdata.combat)
        }
      ]
    };
  }
  render() {
    return (
      <StatusArea>
        <ResponsiveContainer width="99%" aspect={1.8}>
          <RadarChart data={this.state.powers}>
            <PolarGrid />
            <PolarAngleAxis dataKey="power" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              dataKey="quantity"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <table>
          <PowerTable>
            <PowerTableIcons>
              <td>
                <PowerIcon
                  alt="Intelligence"
                  src={require("../img/icons/intelecto.png")}
                />
              </td>
              <td>
                <PowerIcon
                  alt="Strength"
                  src={require("../img/icons/forca.png")}
                />
              </td>
              <td>
                <PowerIcon
                  alt="Speed"
                  src={require("../img/icons/velocidade.png")}
                />
              </td>
              <td>
                <PowerIcon
                  alt="Durability"
                  src={require("../img/icons/durabilidade.png")}
                />
              </td>
              <td>
                <PowerIcon
                  alt="Power"
                  src={require("../img/icons/poder.png")}
                />
              </td>
              <td>
                <PowerIcon
                  alt="Combat"
                  src={require("../img/icons/combate.png")}
                />
              </td>
            </PowerTableIcons>
            <PowerTableText>
              {this.state.powers.map((power, index) => (
                <td key={index} className="power-text">
                  {power.quantity}
                </td>
              ))}
            </PowerTableText>
          </PowerTable>
        </table>
      </StatusArea>
    );
  }
}

/*<div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.3e14a18ed81ab7a06bb32003d3a4286d.1557010944136.1557010944136.1557010944136.1&__hssc=57440181.3.1557010944137&__hsfp=3667784326" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
