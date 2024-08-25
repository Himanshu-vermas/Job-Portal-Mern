import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormHeading = styled.h1`
  font-size: 1.5rem;
  color: #6132b4;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const FormSubHeading = styled.p`
  text-align: center;
  margin: 0 0 1rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 0.75rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #6132b4;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #6132b4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #502a92;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background: #6132b4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #502a92;
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or API calls here
    // For simplicity, we'll just show the popup
    setShowPopup(true);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormHeading>Forgot Password</FormHeading>
        <FormSubHeading>Enter your email address to receive a password reset link.</FormSubHeading>

        <FormGroup>
          <FormLabel htmlFor="email"><i className="bi bi-envelope"></i> Email address</FormLabel>
          <FormInput
            type="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <SubmitButton type="submit"><i className="bi bi-envelope-fill"></i> Send Reset Link</SubmitButton>
      </form>

      {showPopup && (
        <Popup>
          <PopupContent>
            <h2>Reset Link Sent!</h2>
            <p>If the email address you entered is associated with an account, you will receive a password reset link shortly.</p>
            <CloseButton onClick={() => setShowPopup(false)}>Close</CloseButton>
          </PopupContent>
        </Popup>
      )}
    </FormContainer>
  );
}

export default ForgotPassword;
