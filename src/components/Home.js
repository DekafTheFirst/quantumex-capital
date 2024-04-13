import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage/OptimizedImage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ServiceCard from './ServiceCard/ServiceCard';
import { servicesList } from '../Pages/Services/servicesList';

// import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import { LazyLoadImage } from 'react-lazy-load-image-component';




const Home = ({ scrolled }) => {
  // const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(0); // State variable to track hovered index

  const handleCardHover = (index) => {
    setHoveredIndex(index);
    console.log('hover changed')
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0); // Reset hovered index when mouse leaves the cards area
  };

  return (
    <div className='home'>

      <section className="hero">
        <div class={`overlay ${scrolled ? 'scrolled' : ''}`}>
          <svg width="100" height="100%" class="line-svg">
            <line x1="0" y1="0" x2="0" y2="100%" stroke="lightGray" stroke-width="0.5" />

            <circle cx="0" cy="100" r="4" fill="#08b2b4" />
            <circle cx="0" cy="500" r="4" fill="#08b2b4" />


          </svg>
          <svg width="100" height="100%" class="line-svg-2">
            <line x1="0" y1="0" x2="0" y2="100%" stroke="lightGray" stroke-width="0.5" />

            <circle cx="0" cy="200" r="4" fill="#08b2b4" />
            <circle cx="0" cy="600" r="4" fill="#08b2b4" />

          </svg>
        </div>
        <div className="container-fluid">
          <div className="hero-content">
            <h1>
              Quantumex Capital Solutions
            </h1>
            <p>
              We specialize in providing comprehensive solutions that integrate environmental considerations into sustainability and development decision-making processes.            </p>

            <div className="buttons">
              <Link to="/company" className='page-btn'>Learn More <ArrowForwardIcon fontSize='21' className='icon' /></Link>
              <Link to="/contact" className='page-btn-2'>Get In Touch <ArrowForwardIcon fontSize='21' className='icon' /> </Link>
            </div>
          </div>

        </div>
        <div className="dotted"></div>
        <OptimizedImage src={require("../imgs/quantum-ex-capital-solutions/finance.jpg")} className="hero-img" alt="hero-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" />
        {/* <img src={require("../imgs/quantum-ex-capital-solutions/finance.jpg")} className="hero-img" alt="hero-img" backgroundImage/> */}

      </section>

      <section className="reputation">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="header-image">
                <div className="header-image-wrapper">
                  <div className="item">
                    <OptimizedImage src={require("../imgs/quantum-ex-capital-solutions/3.jpg")} className='img' blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
                  </div>
                  <div className="item">
                    <OptimizedImage src={require("../imgs/quantum-ex-capital-solutions/2.jpg")} className="img" blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
                  </div>
                </div>

              </div>

            </div>
            <div className="col-md-6 content">
              <span className='section-heading' >With a commitment to excellence and integrity</span>
              <h2>We stand at the forefront of innovation.</h2>
              <p>
                Our team of seasoned professionals brings together diverse skill sets and deep industry knowledge to offer tailored solutions that address the unique needs of our clients.
              </p>

              <Link to="/company"><PlayCircleIcon fontSize='large' /> See How It Works</Link>
            </div>
          </div>


        </div>
      </section>

      


      <section className='home-about-us'>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-4 left">
              <h2>Our vision is to be a trusted partner in driving economic development</h2>
              <p>

                QuantumEx Capital Solutions Ltd offers expertise in navigating the
                complex intersection of finance, policy, and environmental science.
              </p>
              <div className="bottom mt-auto">
                <span>DESTINY KEFAS</span>
                <span>CEO, Founder.</span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row cards">
                <div to="" className="col-md-6 home-about-us-card">
                  <OptimizedImage src={require("../imgs/quantum-ex-capital-solutions/1.jpg")} className="img" blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
                  <h6>WHO WE ARE</h6>
                  <p>
                  We are a pioneering Legal, financial and research advisory firm committed to driving sustainable economic development in Nigeria and beyond. 
                  </p>
                  <Link to="/company" className='icon'>
                    <ChevronRightRoundedIcon fontSize='medium' /> Learn More
                  </Link>

                </div>

                <div to="" className="col-md-6 home-about-us-card">
                  <OptimizedImage src={require("../imgs/quantum-ex-capital-solutions/2.jpg")} className="img" blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
                  <h6>OUR MISSION</h6>
                  <p>
                  To conduct rigorous comparative assessments of legal frameworks impacting groundwater resources, facilitating informed policy engagement and fostering dialogue on the need for adaptive changes.                   </p>
                  <Link to="/company" className='icon'>
                    <ChevronRightRoundedIcon fontSize='medium' /> Learn More
                  </Link>

                </div>

              </div>


            </div>

          </div>
        </div>
      </section>




      <section className="services" onMouseLeave={handleMouseLeave}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <h2 className='section-heading'>Unmatched Service.<br />Unmatched Excellence.</h2>
            </div>
            {servicesList.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isHovered={index === hoveredIndex}
                onMouseEnter={() => handleCardHover(index)}
              />
            ))}

            {/* <div className="col-md-6 col-xl-4 service-wrapper">
              <Link to="" className="service">
                <ProjectManagement className='icon' />
                <h6 className='title'>Project Management</h6>
                <p className='card-text'>Our medical projects go beyond treating physical ailments. We approach healthcare holistically. </p>
                <p className='learn-more'>learn more...</p>

              </Link>
            </div><div className="col-md-6 col-xl-4 service-wrapper">
              <Link to="" className="service">
                <ProjectManagement className='icon' />
                <h6 className='title'>Project Management</h6>
                <p className='card-text'>Our medical projects go beyond treating physical ailments. We approach healthcare holistically. </p>
                <p className='learn-more'>learn more...</p>

              </Link>
            </div>
            <div className="col-md-6 col-xl-4 service-wrapper">
              <Link to="" className="service">
                <ProjectManagement className='icon' />
                <h6 className='title'>Project Management</h6>
                <p className='card-text'>Our medical projects go beyond treating physical ailments. We approach healthcare holistically. </p>
                <p className='learn-more'>learn more...</p>

              </Link>
            </div>
            <div className="col-md-6 col-xl-4 service-wrapper">
              <Link to="" className="service">
                <ProjectManagement className='icon' />
                <h6 className='title'>Project Management</h6>
                <p className='card-text'>Our medical projects go beyond treating physical ailments. We approach healthcare holistically. </p>
                <p className='learn-more'>learn more...</p>

              </Link>
            </div> */}
          </div>
        </div>
      </section>


      {/* <section className='image-slider'>
        <div className="container-fluid">
          <div className="" onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()} onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}>
            <Swiper
              ref={swiperRef}
              cssMode={true}
              navigation={true}
              pagination={{ el: ".swiper-custom-pagination", clickable: true }}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,

              }}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}

              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/1.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/3.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/4.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/5.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/6.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/7.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/8.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/9.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/10.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/11.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/quantum-ex-capital-solutions/slider/12.JPG')} /></SwiperSlide>

            </Swiper>
            <div className="swiper-custom-pagination"></div>
          </div>
        </div>


      </section> */}
    </div>
  )
}

export default Home