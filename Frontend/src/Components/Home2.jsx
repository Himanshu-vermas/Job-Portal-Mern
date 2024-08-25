
import React from 'react';
import { RiPencilRuler2Fill, RiBarChartBoxFill, RiMegaphoneFill, RiWallet3Fill, RiCarFill, RiTruckFill, RiComputerFill, RiBuildingFill } from 'react-icons/ri';


const ExploreSection = () => {
  return (
    <section className="section__container explore__container">
      <h2 className="section__header">
        <span>Countless Career Options</span> Are Waiting For You To Explore
      </h2>
      <p className="section__description">
        Discover a World of Exciting Opportunities and Endless Possibilities,
        and Find the Perfect Career Path to Shape Your Future.
      </p>
      <div className="explore__grid">
        <div className="explore__card">
          <span><RiPencilRuler2Fill /></span>
          <h4>Design</h4>
          <p>200+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiBarChartBoxFill /></span>
          <h4>Sales</h4>
          <p>350+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiMegaphoneFill /></span>
          <h4>Marketing</h4>
          <p>500+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiWallet3Fill /></span>
          <h4>Finance</h4>
          <p>200+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiCarFill /></span>
          <h4>Automobile</h4>
          <p>250+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiTruckFill /></span>
          <h4>Logistics / Delivery</h4>
          <p>1k+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiComputerFill /></span>
          <h4>Admin</h4>
          <p>100+ jobs openings</p>
        </div>
        <div className="explore__card">
          <span><RiBuildingFill /></span>
          <h4>Construction</h4>
          <p>500+ jobs openings</p>
        </div>
      </div>
      <div className="explore__btn">
        <button className="btn">View All Categories</button>
      </div>
    </section>
  );
};

export default ExploreSection;
