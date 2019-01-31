import React, { Component } from 'react'
import CircleArrowBack from './CircleArrowBack';
import "../static/css/contact.css";
import BusinessCard from "../components/BusinessCard.js";
import marc from "../static/img/marc.jpeg";

export default class Contact extends Component {
  render() {
    return (
      <div className="section bottom-right-corner position-3">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(3)}/>
      }
        <BusinessCard propic={marc}/>
      </div>
    )
  }
}
