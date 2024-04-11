import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ProjectManagementIcon } from '../../imgs/quantum-ex-capital-solutions/project-management.svg'

import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GavelIcon from '@mui/icons-material/Gavel';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';

import ProjectManagement from './ProjectManagement';

import './Services.css'
import { Business } from '@mui/icons-material';

export const servicesList = [
    {
      title: 'Legal Advisory and Policy Development',
      slug: 'legal-advisory-and-policy-development',
      desc: 'Our team of seasoned legal practitioners specializes in providing comprehensive legal advisory services tailored to the needs of governments, businesses, and communities.',
      icon: <GavelIcon />,
      element: <ProjectManagement />
    },
    {
      title: 'Financial Consulting and Investment Advisory',
      slug:'financial-consulting-and-investment-advisory',
      desc: 'Our financial consulting services are designed to empower governments, businesses, and communities to make informed decisions that promote economic growth while safeguarding natural resources.',
      icon: <AttachMoneyIcon />,
      element: <ProjectManagement />    
    },
    {
      title: 'Environmental Management and Sustainability Solutions',
      slug:'environmental-management-and-sustainability-solutions',
      desc: 'At QuantumEx Capital Solutions Ltd, we integrate environmental considerations into sustainability and development decision-making processes. ',
      icon: <EnergySavingsLeafOutlinedIcon />,
      element: <ProjectManagement />    }, 
    {
      title: 'Public Private Partnerships (PPPs)',
      slug:'public-private-partnerships',
      desc: 'We specialize in facilitating partnerships between the public and private sectors to drive infrastructure development and promote sustainable economic growth.',
      icon: <Business />,
      element: <ProjectManagement />    }, 
    {
      title: 'Project Management',
      slug:'project-management',
      desc: 'Our project management services are designed to ensure the successful implementation of environmental sustainability initiatives.',
      icon: <PlaylistAddCheckIcon />,
      element: <ProjectManagement />    },
  ]

const images = [];
const Services = () => {
    const { slug } = useParams();
    const currentService = servicesList.find((service) => service.slug === slug).element
    const navigate = useNavigate();




    return (
        <div className='servicesList page'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>servicesList</h1>
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
                    <div className='filter col-lg-3'>
                        <h3>servicesList</h3>
                        <div className="tags">
                            {servicesList.map(service => (<button key={service.slug} className={`tag ${slug === service.slug ? 'active' : ''}`} onClick={() => navigate(`/servicesList/${service.slug}`)}>{service.title}</button>))}
                        </div>
                    </div>
                    <div className="article col-lg-9">
                        {currentService}
                    </div>
                </div>

            </div>
        </div>
    )
}




export default Services