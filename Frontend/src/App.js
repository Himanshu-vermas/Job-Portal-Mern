import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import About from './Components/About';
import HomeAlternate from './Components/Home2'; // Assuming HomeAlternate is a different component
import Jobs from './Components/Jobs';
import Preview from './Components/Preview';
import ClientTestimonials from './Components/ClientTestimonials';
import ContactUs from './Components/ContactUs';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Footer from './Components/Footer';
import ForgotPassword from './Components/ForgotPassword';
import TermsOfUse from './Components/TermsOfUse';
import Post from './Components/Post';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <About />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/services" element={<Preview />} />
          <Route path="/client" element={<ClientTestimonials />} />
          <Route path="/post" element={<Post/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/registerForm" element={<RegisterForm />} />
        </Routes>
       
        <HomeAlternate />
        <Jobs />
        <Preview />
        {/* <Post/> */}
        <ClientTestimonials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
