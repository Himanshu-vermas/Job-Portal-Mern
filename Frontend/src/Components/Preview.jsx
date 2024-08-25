import React from 'react';


const Preview = () => {
  return (
    <section className="section__container offer__container" id="service">
      <h2 className="section__header">What We <span>Offer</span></h2>
      <p className="section__description">
        Explore the Benefits and Services We Provide to Enhance Your Job Search
        and Career Success
      </p>
      <div className="offer__grid">
        <div className="offer__card">
          <img src="assets/offer-1.jpg" alt="Job Recommendation" />
          <div className="offer__details">
            <span>01</span>
            <div>
              <h4>Job Recommendation</h4>
              <p>Personalized job matches tailored to your skills and preferences</p>
            </div>
          </div>
        </div>
        <div className="offer__card">
          <img src="assets/offer-2.jpg" alt="Create & Build Portfolio" />
          <div className="offer__details">
            <span>02</span>
            <div>
              <h4>Create & Build Portfolio</h4>
              <p>Showcase your expertise with professional portfolio design</p>
            </div>
          </div>
        </div>
        <div className="offer__card">
          <img src="assets/offer-3.jpg" alt="Career Consultation" />
          <div className="offer__details">
            <span>03</span>
            <div>
              <h4>Career Consultation</h4>
              <p>Receive expert advice to navigate your career path</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
