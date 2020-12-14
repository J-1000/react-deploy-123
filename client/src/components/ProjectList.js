import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectList(props) {
  return (
    <div>
      {props.projects.map(project => {
        return (
          <div key={project._id}>
            <h3>
              {project.title}
            </h3>
            <p>{project.description}</p>
          </div>
        )
      })}
    </div>
  )
}
