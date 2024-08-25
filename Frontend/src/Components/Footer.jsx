// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiPhoneFill, RiMapPin2Fill } from 'react-icons/ri';

// Styled components
const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 2rem 0;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterCol = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

const FooterLogo = styled.div`
  .logo {
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    span {
      color: #f39c12;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 0.5rem 0;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const FooterBar = styled.div`
  background: #222;
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterCol>
          <FooterLogo>
            <a href="#" className="logo">Job<span>Portal</span></a>
          </FooterLogo>
          <p>Our platform is designed to help you find the perfect job and achieve your professional dreams.</p>
        </FooterCol>
        <FooterCol>
          <h4>Quick Links</h4>
          <FooterLinks>
          <li><a href="/">Home</a></li>
         <li><a href="/About">About</a></li>
         <li><a href="/Jobs">Jobs</a></li>
            
         <li><a href="https://forms.gle/bUX9egNMwRMtvbht7">Contact Us</a></li>
          </FooterLinks>
        </FooterCol>
        <FooterCol>
          <h4>Follow Us</h4>
          <FooterLinks>
            <li><a href="https://github.com/Himanshu-vermas"><FaGithub /> Github</a></li>
            <li><a href="https://www.linkedin.com/in/himanshu-verma-798932286/"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100009809134637"><FaFacebook /> Facebook</a></li>
            <li><a href="https://www.instagram.com/himanshu_shroff_/"><FaInstagram /> Instagram</a></li>
           <li><a href="https://x.com/Himansh93322693"><FaTwitter /> Twitter</a></li>
           
          </FooterLinks>
        </FooterCol>
        <FooterCol>
          <h4>Contact Us</h4>
          <FooterLinks>
            <li><a href="#"><RiPhoneFill /> +91 9519221840</a></li>
            <li><a href="https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh/@28.4982604,77.3511848,11z/data=!4m15!1m8!3m7!1s0x390cea64b8f89aef:0xec0ccabb5317962e!2sGreater+Noida,+Uttar+Pradesh!3b1!8m2!3d28.4743879!4d77.5039904!16zL20vMGN3OXEy!3m5!1s0x390cea64b8f89aef:0xec0ccabb5317962e!8m2!3d28.4743879!4d77.5039904!16zL20vMGN3OXEy?entry=ttu"><RiMapPin2Fill /> Greater noida u.p.</a></li>
          </FooterLinks>
        </FooterCol>
      </FooterInner>
      <FooterBar>
        Copyright © 2024 Himanshu Verma . All rights reserved.
      </FooterBar>
    </FooterContainer>
  );
};

export default Footer;
