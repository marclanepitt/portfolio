import React, { Component } from 'react';
import "../../static/css/experience.css";
import CircleArrowBack from '../CircleArrowBack';
import JobBox from '../Experience/JobBox';
import truverisLogo from "../../static/img/truveris.png";
import krossoverLogo from "../../static/img/krossover.jpg";
import sidelineLogo from "../../static/img/playsideline.png";
import uncLogo from "../../static/img/unc.png";
import marcexperience from "../../static/img/marcexperience.png";

var jobs = [
  { name: "Truveris",
    title: "Front-End Engineering Intern",
    duration: "May 2018 - August 2018",
    logo: truverisLogo,
    website: "http://www.truveris.com",
    primaryColor: "white",
    description: ["Abstracted and implemented common front-end components into Truveris KSS Framework",
      "Restructured mako templates using the Truveris KSS Framework and improved styling for a modern look-and-feel",
      "Designed new prototypes of outdated pages in Sketch and iterated through the SDLC",
      "Developed in an agile environment and participated in daily standup and scoring meetings"]
    //#1376BA
  },
  {
    name: "UNC Chapel Hill",
    title: "Learning Assistant",
    duration: "August 2018 - December 2018",
    logo: uncLogo,
    website: "https://cs.unc.edu/",
    customStyles: {backgroundSize: "auto 40%"},
    description: ["Designed and developed a poker engine in Javascript w/ JQuery to be used in class assignment",
      "Graded assignments and helped resolve grading issues post feedback",
      "Held office hours to help students with class notes, assignments, and gave final project advice",
      "Helped to develop an introduction to React lecture "]
  },
  { name: "Krossover",
    title: "Data and Analytics Intern",
    duration: "May 2017 - August 2017",
    logo: krossoverLogo,
    website: "http://www.krossover.com",
    primaryColor: "white",
    customStyles: {backgroundSize: "auto 60%"},
    description: ["Designed and implemented an auto-renewal system for customer subscriptions utilizing Flask as the backend and React as the front-end",
    "Utilized Redis Queue for asynchronous jobs in order to account for delays in the Stripe API",
    "Wrote Python scripts to normalize Salesforce contact data using the Salesforce Bulk API",
    "Extracted sales team performance with complex SQL queries in order to visualize data in Periscope",
    "Conducted analysis on sales team calls and presented results to senior management"]
  },
  { name: "PlaySideline",
    title: "Full Stack Engineering Intern",
    duration: "September 2016 - January 2017",
    logo: sidelineLogo,
    website: "http://www.playsideline.com",
    primaryColor: "white",
    customStyles: {backgroundSize: "auto 30%"},
    description: ["Programmed with Python, Django, HTML, and CSS to enhance the Playsideline web application through bug fixes and feature additions",
    "Experienced the daily operations of a startup and gained a better understanding of communication and teamwork within a company"]
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
       <div>
          <img src={marcexperience} className="marc-experience-expanded"/>
          <div className="job-description">
            <ul className="job-description-list">
            {jobs[this.state.selectedJob].description.map((point) => {
              return <li className="job-description-item">{point}</li>
            })}
            </ul>
          </div>
        </div>

      }
      </div>
      </div>
    )
  }
}
