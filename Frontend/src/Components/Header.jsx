import React from 'react';

function Header() {
  return (
    <header className="section__container header__container" id="home">
      <img src="assets/google.png" alt="header" />
      <img src="assets/twitter.png" alt="header" />
      <img src="assets/amazon.png" alt="header" />
      <img src="assets/figma.png" alt="header" />
      <img src="assets/linkedin.png" alt="header" />
      <img src="assets/microsoft.png" alt="header" />
      <h2>
        <img src="assets/bag.png" alt="bag" />
        No.1 Job Portal Website
      </h2>
      <h1>Search, Apply &<br />Get Your <span>Dream Job</span></h1>
      <p>
        Your future starts here. Discover countless opportunities, take action
        by applying to jobs that match your skills and aspirations, and
        transform your career.
      </p>
      <div className="header__btns">
        {/* <button className="btn">Browse Jobs</button> */}
        <a href="#">
          {/* <span><i className="ri-play-fill"></i></span> */}
         <h2>This Website fast to reply.....</h2>
        </a>
      </div>
    </header>
  );
}

export default Header;
