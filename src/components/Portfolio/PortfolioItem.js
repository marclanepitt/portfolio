import React, { Component } from 'react'
import "../../static/css/portfolioitem.css";

export default class PortfolioItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hover: false,
      }
  }
  render() {
    return (
      <div className="portfolio-item-wrapper" onMouseEnter={()=>{this.setState({hover:true})}} onMouseLeave={()=>{this.setState({hover:false})}}>
        <div className="portfolio-item-image"  style={Object.assign({backgroundImage: `url(${this.props.item.image})`},this.props.item.customStyles)}/>
        {this.state.hover &&
            <div className="item-info-overlay">
                {this.props.item.name} <br/>
                <a style={{fontSize:'1.5vh'}} target="_blank" rel="noopener noreferrer" href={this.props.item.link}><i class="fa fa-external-link" aria-hidden="true"></i> {this.props.item.link}</a>
            </div>
        }
      </div>
    )
  }
}
