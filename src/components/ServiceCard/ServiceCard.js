import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'
import { ReactComponent as ProjectManagement } from '../../imgs/grace-medical/project-management.svg'

const ServiceCard = ({service, isHovered, onMouseEnter}) => {
    return (
        <div className="col-md-6 col-xl-4 service-wrapper">
            <Link to="" className={`service ${isHovered ? 'hovered': ''}`} onMouseEnter={onMouseEnter}>
                <ProjectManagement className='icon' />
                <h6 className='title'>{service.title}</h6>
                <p className='card-text'>{service.desc}</p>
                <p className='learn-more'>learn more...</p>
            </Link>
        </div>
    )
}

export default ServiceCard