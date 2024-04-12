import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const ProjectManagement = () => {
  return (
    <div>
      <h2 className='title'>Project Management
      </h2>

      <p className='body-text'>Our project management services are designed to ensure the successful implementation of environmental sustainability initiatives.</p>
      <p className='body-text'>We offer expertise in planning, executing, and evaluating projects, with a focus on achieving desired outcomes while managing resources efficiently.</p>



      <div className="contact">
        <p className='body-text'>
        <Link to='/contact'> Get in touch with us</Link> today to discover how our project management services can support your organization in implementing environmentally sustainable projects effectively.
        </p>
      </div>
    </div>
  )
}

export default ProjectManagement