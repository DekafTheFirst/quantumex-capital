import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const EnvironmentalManagement = () => {
  return (
    <div>
      <h2 className='title'>Environmental Management and Sustainability Solutions
      </h2>

      <p className='body-text'>We integrate environmental considerations into sustainability and development decision-making processes.
      </p>


      <div className="subservice">
        <h3 className='h3 mb-3'>Our expertise includes:</h3>
        <span className='subheading'>Groundwater Management:</span>
        <p className='body-text'>Offering expertise in navigating the complex intersection of finance, policy, and environmental science to address challenges related to groundwater management.</p>

        <span className='subheading'>Project Management: </span>
        <p className='body-text'>Providing project management services to ensure the successful implementation of environmental sustainability initiatives, from planning to execution and evaluation.</p>



        <span className='subheading'>Stakeholder Engagement: </span>
        <p className='body-text'>Fostering collaboration and dialogue among stakeholders to shape a future where economic development thrives in harmony with environmental conservation.</p>

      </div>



      <div className="contact">
        <p className='body-text'>
          <Link to='/contact'>Contact us</Link> today to discuss how our environmental management and sustainability solutions can assist your organization in achieving its environmental and sustainability goals.
        </p>
      </div>
    </div>
  )
}

export default EnvironmentalManagement