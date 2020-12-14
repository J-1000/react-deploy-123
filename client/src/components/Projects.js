import React, { Component } from 'react'
import axios from 'axios';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

export default class Projects extends Component {

  state = {
    projects: []
  }
  getData = () => {
    // get the current list of projects from the server
    // axios.get('/api/projects')
    //   .then(response => {
    //     console.log(response);
    //     // put them into the state
    const projects = [
      { name: 'Google', description: 'Build a search engine' },
      { name: 'Instagram', description: 'Build a photo sharing application' }
    ]
    this.setState({
      projects
    })
    // })
    // .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='projects-container'>
        <AddProject getData={this.getData} />
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}
