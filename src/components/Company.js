import React, { } from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage/OptimizedImage'


const Company = () => {

    return (
        <div className='page about-us'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className='heading'>About Us</h2>
                        <p className='body-text'>
                            QuantumEx Capital Solutions Ltd (QEX) is a multidisciplinary consulting/research firm whose primary goal is to improve and drive data-driven solutions, providing cutting-edge innovation through our team of seasoned professionals and industry practitioners. We specialize in fashioning global best practices for local and international multilateral agencies for development in Nigeria and beyond.
                        </p>
                    </div>

                    <div className="col-12 col-md-6">
                        <OptimizedImage src={require('../imgs/quantum-ex-capital-solutions/4.jpg')} style={{height:"100%"}}/>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-12 col-md-6">
                        <h2 className='heading'>Our Mission</h2>
                        <p className='body-text'>
                            At QuantumEx Capital Solutions Ltd, our mission is to be a trusted partner in driving economic development and fostering environmental resilience in the regions we serve. Through rigorous analysis, strategic insights, and data-driven solutions, we empower governments, businesses, and communities to make informed decisions that balance economic opportunities with environmental conservation.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 justify-content-start">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        CORE VALUES
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <ul className='accordion-list'>
                                        <li><strong>Commitment to Sustainability:</strong> We are deeply committed to environmental sustainability and the protection of natural resources.</li>
                                        <li><strong>Innovative Thinking: </strong> We embrace innovative thinking to propose creative solutions to complex environmental challenges.</li>
                                        <li><strong>Collaboration:</strong>  We believe in the power of collaboration and dialogue to drive positive change and foster sustainable development.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        OUR VISION
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>Our vision is to lead the way in providing innovative, data-driven solutions that address the evolving challenges of sustainable development. We strive to be at the forefront of driving positive change, both locally and internationally, by leveraging our expertise and experience to create tangible and lasting impact.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        OUR OBJECTIVES
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <ul className='accordion-list'>
                                        <li>Conduct comprehensive comparative assessments of legal frameworks impacting groundwater resources in Nigeria and beyond.</li>
                                        <li>Facilitate informed policy engagement with stakeholders to advocate for adaptive changes in environmental conservation and sustainable resource management.</li>
                                        <li>Provide innovative financial consulting services to empower governments, businesses, and communities in making informed decisions that promote economic growth while safeguarding natural resources.</li>
                                        <li>Foster collaboration and dialogue among stakeholders to shape a future where economic development thrives in harmony with environmental conservation.</li>
                                        <li>Advocate for the integration of traditional knowledge and community participation in groundwater management efforts to promote resilience and inclusivity in decision-making processes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='heading text-center'>Contact Us</h2>
                <p className='body-text'>
                    Ready to collaborate with QuantumEx Capital Solutions Ltd to achieve your sustainability goals? <Link to='/contact'>Reach out</Link> to us today to discuss how we can support your organization's objectives and make a lasting impact in your community.
                </p>

                {/* <div className="row our-team">
                <h6 className='section-heading'>Our Team</h6>
                <h2>Meet the EXCOS</h2>
                <div className="wrapper">
                    <div className="cards">
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/people/kefas-jibir.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/chairman.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Dr Kefas Jibir, MBBS, FWACP</span>
                                    <h5>Chairman</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/secretary.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pharm Emmanuel Adaji</span>
                                    <h5>General Secretary</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/drugs.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pharm Toyin Bada</span>
                                    <h5>HOD Pharmacy/Treasurer</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/counseling.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pst Davidson Iheanyichukwu</span>
                                    <h5>HOD Counselling</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>


                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/prayer.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pst Tukura James</span>
                                    <h5>HOD Prayers</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/it-department.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Engr Peter Echiye(MCPN)</span>
                                    <h5>HOD Media/IT/Public Relation</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/planning.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Moses Ogebe</span>
                                    <h5>HOD Planning/Mobilization</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/quantum-ex-capital-solutions/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/quantum-ex-capital-solutions/legal.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Bar Emeka Alioha</span>
                                    <h5>Legal Adviser</h5>
                                </div>
                                <div className="media-links">
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                                    </Link>
                                    <Link to="#">
                                        <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                                    </Link>
                                </div>
                                <p></p>
                            </div>
                        </div>


                        
                    </div>
                </div>

                                
            </div> */}
                {/* <h2 className='text-center'>Meet The Team</h2>

                <div className="row justify-content-center g-5">

                </div> */}

            </section>
        </div>
    )
}

export default Company