import React, { memo } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineExclamationCircle, AiOutlineSync } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

const TaskItem = ({ task, onPressEdit, onDelete }) => {
  // console.log("re render");

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Completed':
        return { background: 'green', color: '#fff', icon: <AiOutlineCheckCircle /> };
      case 'In Progress':
        return { background: 'orange', color: '#fff', icon: <AiOutlineClockCircle /> };
      case 'Pending':
      default:
        return { background: 'red', color: '#fff', icon: <AiOutlineExclamationCircle /> };
    }
  };

  const getUploadStatusIcon = (uploadStatus) => {
    switch (uploadStatus) {
      case 'uploading':
        return <AiOutlineSync className="spin" />;
      case 'dontUpload':
        return <MdError />;
      default:
        return null;
    }
  };

  const { background, color, icon } = getStatusStyles(task.status);

  return (
    <TaskContainer>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      
      {task.uploadStatus && (
          <UploadStatusIcon>
            {getUploadStatusIcon(task.uploadStatus)}
          </UploadStatusIcon>
        )}
      <ButtonGroup>
        <Button onClick={() => onPressEdit(task)}>
          <FaEdit /> Edit
        </Button>
        <Button onClick={() => onDelete(task.id)}>
          <FaTrashAlt /> Delete
        </Button>
        <Status style={{ background, color }}>
          {icon} {task.status}
        </Status>
      </ButtonGroup>
    </TaskContainer>
  );
};

export default memo(TaskItem);

const TaskContainer = styled.div`
  flex: 1 1 100%;
  max-width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin: 10px;
  position: relative;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 576px) {
    flex: 1 1 50%;
  }

  @media (min-width: 992px) {
    flex: 1 1 33.33%;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;



const Status = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const UploadStatusIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  /* border: 1px solid #ddd; */
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  .spin {
    animation: spin 1s linear infinite;
    font-size: 1rem;
    color: #007bff;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    font-size: 1.2rem;
  }
`;
