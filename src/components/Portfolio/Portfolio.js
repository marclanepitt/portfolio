import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';
import classcal from "../../static/img/classcalPort.png";
import athleticons from "../../static/img/athleticonsPort.png";
import shade from "../../static/img/shadePort.png";
import PortfolioItem from './PortfolioItem';

let portfolioItems = [
  {
    name: "ClassCal",
    image: classcal,
    link: "https://www.classcal.com",
    customStyles: {backgroundSize: "auto 170%", backgroundPosition:'top'},
  },
  {
    name: "Athleticons",
    image: athleticons,
    link: "https://github.com/marclanepitt/athleticons"
  },
  {
    name: "Shade Analytics",
    image: shade,
    link: "http://shadeanalytics.herokuapp.com/",
    customStyles: {backgroundSize: "auto 170%", backgroundPosition:'top'},
  }
]

export default class Portfolio extends Component {
  render() {
    return (
      <div className="section top-right-corner position-1">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(1)}/>
      }
      {portfolioItems.map((item)=> {
       return <PortfolioItem item={item}/>
     })}
     </div>

     
    )
  }
}
