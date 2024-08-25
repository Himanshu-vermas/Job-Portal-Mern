import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Swiper styles
import 'remixicon/fonts/remixicon.css'; // Remix Icon styles

// Styled components
const Section = styled.section`
  padding: 40px; /* Adjust padding as needed */
  background-color: #f9f9f9; /* Optional: Add background color */
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1rem;
  color: #666;
`;

const ClientCard = styled.div`
  text-align: center;
  padding: 20px;
  background: #fff; /* Optional: Add background color */
  border-radius: 8px; /* Optional: Add border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow */
  
  img {
    border-radius: 50%;
    width: 100px; /* Adjust size as needed */
    height: 100px; /* Adjust size as needed */
    object-fit: cover;
  }

  p {
    font-size: 0.9rem;
    margin: 10px 0;
    color: #333;
  }

  h4 {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  h5 {
    font-size: 1rem;
    color: #777;
  }
`;

const ClientRatings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
  i {
    color: #f39c12; /* Adjust the color as needed */
    font-size: 1.5rem; /* Adjust size as needed */
  }
`;

const ClientTestimonials = () => {
  return (
    <Section className="section__container client__container" id="client">
      <Header className="section__header">
        What Our <span>Client Say</span>
      </Header>
      <Description className="section__description">
        Read Testimonials and Success Stories from Our Satisfied Job Seekers and Employers to See How We Make a Difference
      </Description>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // Enable navigation buttons
        modules={[Navigation, Pagination]} // Specify the modules used
        style={{ /* Adjust size here if needed */
          width: '80%', /* Adjust width as needed */
          maxWidth: '1200px', /* Adjust max width as needed */
          margin: '0 auto' /* Center the Swiper */
        }}
      >
        <SwiperSlide>
          <ClientCard className="client__card">
            <img src="assets/client-1.jpg" alt="client" />
            <p>
              Searching for a job can be overwhelming, but this platform made it simple and efficient. I uploaded my resume, applied to a few positions, and soon enough, I was hired! Thank you for helping me kickstart my career!
            </p>
            <ClientRatings className="client__ratings">
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
            </ClientRatings>
            <h4>Sarah Patel</h4>
            <h5>Graphic Designer</h5>
          </ClientCard>
        </SwiperSlide>
        <SwiperSlide>
          <ClientCard className="client__card">
            <img src="assets/client-2.jpg" alt="client" />
            <p>
              As a recent graduate, I was unsure where to start my job search. This website guided me through the process step by step. From creating my profile to receiving job offers, everything was seamless. I'm now happily employed thanks to this platform!
            </p>
            <ClientRatings className="client__ratings">
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-half-fill"></i></span>
            </ClientRatings>
            <h4>Michael Brown</h4>
            <h5>Website Engineer</h5>
          </ClientCard>
        </SwiperSlide>
        <SwiperSlide>
          <ClientCard className="client__card">
            <img src="assets/client-3.jpg" alt="client" />
            <p>
              Creating an account was a breeze, and I was amazed by the number of job opportunities available. Thanks to this website, I found the perfect position that aligned perfectly with my career goals.
            </p>
            <ClientRatings className="client__ratings">
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
              <span><i className="ri-star-fill"></i></span>
            </ClientRatings>
            <h4>David Smith</h4>
            <h5>Software Engineer</h5>
          </ClientCard>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default ClientTestimonials;
