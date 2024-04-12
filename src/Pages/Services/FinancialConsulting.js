import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const FinancialConsulting = () => {
  return (
    <div>
      <h2 className='title'>Financial Consulting and Investment Advisory
      </h2>

      <p className='body-text'>Our financial consulting services empower governments, businesses, and communities to make informed decisions that promote economic growth while safeguarding natural resources.</p>


      <div className="subservice">
        <h3 className='h3 mb-3'>We offer:</h3>
        <span className='subheading'>Investment Analysis:</span>
        <p className='body-text'>Providing comprehensive investment analysis to identify opportunities that align with sustainable development goals.</p>

        <span className='subheading'>Risk Assessment: </span>
        <p className='body-text'>Assessing financial risks and developing strategies to mitigate them, ensuring long-term success for our clients.</p>



        <span className='subheading'>Public Private Partnerships (PPPs):</span>
        <p className='body-text'>Facilitating partnerships between the public and private sectors to drive infrastructure development and promote sustainable economic growth.</p>

      </div>



      <div className="contact">
        <p className='body-text'>
        <Link to='/contact'>React out to us</Link>  to explore how our financial consulting and investment advisory services can help you achieve your financial and sustainability objectives.
        </p>
      </div>
    </div>
  )
}

export default FinancialConsulting