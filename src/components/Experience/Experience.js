import React, { Component } from 'react'
import CircleArrowBack from '../CircleArrowBack';
import JobBox from '../Experience/JobBox';
import truverisLogo from "../../static/img/truveris.png";
import krossoverLogo from "../../static/img/krossover.jpg";
import sidelineLogo from "../../static/img/playsideline.png";

var jobs = [
  { name: "Truveris",
    title: "Front-End Engineering Intern",
    duration: "May 2018 - August 2018",
    logo: truverisLogo,
    website: "http://www.truveris.com",
    primaryColor: "white"
    //#1376BA
  },
  { name: "Krossover",
    title: "Data and Analytics Intern",
    duration: "May 2017 - August 2017",
    logo: krossoverLogo,
    website: "http://www.krossover.com",
    primaryColor: "white",
    customStyles: {backgroundSize: "auto 60%"}
  },
  { name: "PlaySideline",
    title: "Full Stack Engineering Intern",
    duration: "September 2016 - January 2017",
    logo: sidelineLogo,
    website: "http://www.playsideline.com",
    primaryColor: "white",
    customStyles: {backgroundSize: "auto 30%"}

  },    
];

export default class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedJob : 0
    }
    this.changeSelectedJob = this.changeSelectedJob.bind(this);
  }

  changeSelectedJob(i) {
    this.setState({
      selectedJob: i
    })
  }

  render() {
    return (
      <div className="section top-left-corner position-0">
      {this.props.isExpanded && 
        <CircleArrowBack backToNav = {() => this.props.backToNav(0)}/>
      }
      <div style={{marginTop: '5vh', textAlign: 'center'}}>
        {jobs.map((job, i)=> {
          return <JobBox onClick={() => this.changeSelectedJob(i)} isSelected={this.state.selectedJob === i} isExpanded={this.props.isExpanded} job={job}/>
        })}
      
      {this.props.isExpanded && 
        <div className="job-description">
        </div>
      }
      </div>
      </div>
    )
  }
}
