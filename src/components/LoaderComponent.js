import React from 'react';
import styled, { keyframes } from 'styled-components';


const LoaderComponent = () => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
);

export default LoaderComponent;



const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;


const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;
