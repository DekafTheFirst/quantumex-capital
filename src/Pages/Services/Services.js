import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ProjectManagementIcon } from '../../imgs/quantum-ex-capital-solutions/project-management.svg'


import ProjectManagement from './ProjectManagement';

import './Services.css'
import { servicesList } from './servicesList';



const images = [];
const Services = () => {
    const { slug } = useParams();
    const currentService = servicesList.find((service) => service.slug === slug).element
    

    return (
        <div className='services page'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">servicesList</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{servicesList.find((service => service.slug === slug)).title}</li>
                        </ol>
                    </nav>
                </div>
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className='filter col-lg-4 p-4'>
                        <h3>Services</h3>
                        <div className="filter-items">
                            {servicesList.map(service => (
                                <Link key={service.slug} className={`filter-item ${slug === service.slug ? 'active' : ''}`} to={{pathname: `/services/${service.slug}`, state: {title: service.title}}}>
                                    <div className="icon">
                                        {service.icon}
                                    </div>
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="article col-lg-8 p-4">
                        {currentService}
                    </div>
                </div>

            </div>
        </div>
    )
}




export default Services