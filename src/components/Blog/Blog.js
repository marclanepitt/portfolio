import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';
import "../../static/css/blog.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);

   
  }
  render() {
    return (
      <div className="section bottom-left-corner position-2">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(2)}/>
      }
      
      </div>
    )
  }
}
