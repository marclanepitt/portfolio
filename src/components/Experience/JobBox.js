import React, { Component } from 'react';
import '../../static/css/jobbox.css';

export default class JobBox extends Component {

  render() {
    let wrapperStyle = {};
    let styles = {backgroundImage: `url(${this.props.job.logo})`, backgroundColor:this.props.job.primaryColor}
    styles = Object.assign(styles, this.props.job.customStyles);
    if(this.props.isSelected && this.props.isExpanded) {
      wrapperStyle['border'] = '.3vw solid #3F729B';
    }
    if(this.props.isExpanded) {
      wrapperStyle['cursor'] = "pointer";
    }
    return (
      <div className="job-box-wrapper" style={wrapperStyle} onClick={this.props.onClick}>
        <div className="job-box-title">
          {this.props.job.title}
        </div>
        <div className="job-box-image" onClick={()=>this.props.isExpanded ? this.props.onClick : window.open(this.props.job.website, "_blank")} style={styles}>
        </div>
        <div className="job-box-duration" >
          <i className="fa fa-calendar-o"  aria-hidden="true"></i> {this.props.job.duration}
        </div>
      </div>
    )
  }
}
