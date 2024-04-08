import React, { } from 'react'
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage/OptimizedImage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


// import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = ({ scrolled }) => {
  // const swiperRef = useRef(null);

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
              Quantumex Financial Institution
            </h1>
            <p>
              Step into a world of financial empowerment with our dynamic website, where we blend cutting-edge technology with tailored financial solutions to unlock your true wealth potential.
            </p>

            <div className="buttons">
              <Link to="/about-us" className='page-btn'>Learn More <ArrowForwardIcon fontSize='21' className='icon' /></Link>
              <Link to="/contact" className='page-btn-2'>Get In Touch <ArrowForwardIcon fontSize='21' className='icon' /> </Link>
            </div>
          </div>

        </div>
        <div className="dotted"></div>
        <OptimizedImage src={require("../imgs/grace-medical/finance.jpg")} className="hero-img" alt="hero-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" />
      </section>

      <section className="home-about-us">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="header-image">
                <div className="header-image-wrapper">
                  <div className="item">
                    <OptimizedImage src={require("../imgs/grace-medical/41.JPG")} className='img' blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
                  </div>
                  <div className="item">
                    <OptimizedImage src={require("../imgs/grace-medical/2.JPG")} className="img" blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" />
                  </div>
                </div>

              </div>

            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-12  content">
                  <h6 className='section-heading' >Who We Are</h6>
                  <h2 >Our Story Is One Faith</h2>
                  <p>
                    With compassion, and a commitment
                    to serving others. Founded on
                    Christian principles, we strive to be a
                    beacon of hope in the field of
                    healthcare.
                  </p>
                  <p>
                    With compassion, and a commitment
                    to serving others. Founded on
                    Christian principles, we strive to be a
                  </p>
                  <Link to="/about-us"><PlayCircleIcon fontSize='large' /> See How It Works</Link>
                </div>

              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <section className="welcome mx-auto">
        <div className="container-fluid">
          <OptimizedImage src={require("../imgs/grace-medical/finance.jpg")} style={{ height: 250, width: 200 }} alt="hero-img" blurhash="LcLEHB~pIUIU_4xvt7j@E2NHRjof" />

          <h1 ><span>Welcome To</span>Grace Medical Outreach International</h1>
          <p>
            we believe in the transformative
            power of compassionate healthcare
            rooted in Christian values. Our mission
            is to extend healing hands to those in
            need, providing not just medical care
            but also the love and hope that come
            from our faith.
          </p>
        </div>

      </section> */}


      <section className='reputation'>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-4">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero animi,</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero animi, voluptatum nostrum dolore rem nihil minima aperiam modi excepturi pariatur placeat, hic voluptate itaque deleniti cupiditate velit quae reiciendis.</p>
            </div>
            <div className="col-md-8">
              <div className="row cards">
                <div className="reputation-card">
                  {/* <OptimizedImage src={require("../imgs/grace-medical/2.JPG")} className="img" blurhash="LWH.4sD+$%kX~poeNFx]?Ht7WBxu" /> */}
                  <h5>Helping Hand</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut expedita
                  </p>

                  <Link to="/projects"> join us &#8594;</Link>
                </div>


              </div>


            </div>

          </div>
        </div>
      </section>




      <section className="services bg-green">
        <div className="container-fluid">
          <div className="row">
            <h6 className='section-heading'>What we do</h6>
            <h2 >The details of our good cause</h2>
            <div className="cards">
              <div className="card">
                <img className="card-img-top" src={require("../imgs/grace-medical/10.jpg")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Holistic Medical Care</h3>
                  <p className='card-text'>Our medical projects go beyond treating physical ailments. We approach healthcare holistically, recognizing the interconnectedness of body, mind, and spirit.</p>
                  <Link className="page-btn-2 card-btn" to="/services">Join us</Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={require("../imgs/grace-medical/41.JPG")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Community Outreach Programs</h3>
                  <p className='card-text'>Through various outreach programs, we aim to improve the overall health of our communities, addressing both medical and social determinants of well-being.</p>
                  <Link className="page-btn-2 card-btn" to="/services">Join us</Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={require("../imgs/grace-medical/2.JPG")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Spiritual Support and Counseling</h3>
                  <p className='card-text'>We understand the importance of the spiritual aspects of health. Our compassionate chaplains and counselors are ready to provide spiritual support to those in need.</p>
                  <Link className="page-btn-2 card-btn" to="/services">Join us</Link>
                </div>
              </div>
            </div>

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
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/1.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/3.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/4.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/5.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/6.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/7.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/8.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/9.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/10.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/11.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/12.JPG')} /></SwiperSlide>

            </Swiper>
            <div className="swiper-custom-pagination"></div>
          </div>
        </div>


      </section> */}
    </div>
  )
}

export default Home