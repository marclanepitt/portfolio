import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';
import "../../static/css/blog.css";
import marcconstruction from "../../static/img/marcconstruction.png";

export default class Blog extends Component {

  render() {
    return (
      <div className="section bottom-left-corner position-2" style={{overflowX: "hidden", overflowY:"hidden"}}>
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(2)}/>
      }
      <div className="construction-wrapper">
        <div>
         <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Under Construction
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
       </div>
       </div>
       <img src={marcconstruction} className="marc-construction-image"/> 
      </div>
    )
  }
}
