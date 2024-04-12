import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Legal = () => {
  return (
    <div>
      <h2 className='title'>Legal Advisory and Policy Development
      </h2>

      <p className='body-text'>Our legal advisory services are tailored to the needs of governments, businesses, and communities. We specialize in conducting rigorous comparative assessments of legal frameworks impacting groundwater resources, facilitating informed policy engagement, and fostering dialogue on the need for adaptive changes.</p>


      <div className="subservice">
        <h3 className='h3 mb-3'>Our expertise includes:</h3>
        <span className='subheading'>Comparative Legal Analysis:</span>
        <p className='body-text'>Analyzing and comparing environmental laws and regulations to provide insights into best practices and areas for improvement.</p>

        <span className='subheading'>Policy Engagement: </span>
        <p className='body-text'>Engaging policymakers and stakeholders to advocate for policy changes that promote environmental conservation and sustainable resource management.</p>



        <span className='subheading'>Research and Data Collection: </span>
        <p className='body-text'>Conducting in-depth legal research and collaborating with international organizations and local governments to collect data and analyze laws and regulations.</p>

      </div>



      <div className="contact">
        <p className='body-text'>
        <Link to='/contact'>Contact us</Link> today to learn more about how our legal advisory and policy development services can support your organization's goals and initiatives.
        </p>
      </div>
    </div>
  )
}

export default Legal