import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFrown } from 'react-icons/fa';


const NoDataFound = () => (
  <NoDataWrapper>
     <Icon><FaFrown /></Icon>
    <NoDataMessage>No tasks available at the moment.</NoDataMessage>
  </NoDataWrapper>
);

export default NoDataFound;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease-in;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #007bff;
`;

const NoDataMessage = styled.p`
  font-size: 1.2em;
  color: #555;
`;

