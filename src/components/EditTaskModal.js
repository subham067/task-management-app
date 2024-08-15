import styled from 'styled-components';
import { useState } from 'react';


const EditTaskModal = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    onSave({ ...task, title, description, status });
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        <Header>Edit Task</Header>
        <Input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Task Title"
        />
        <Textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Task Description"
        />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <Footer>
          <Button onClick={handleSave}>Save</Button>
          <CloseButton onClick={onClose}>Cancel</CloseButton>
        </Footer>
      </Modal>
    </>
  );
};

export default EditTaskModal;



const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 90%;
  max-width: 500px;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;


const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  min-height: 100px;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
`;


const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  margin-right: 0;

  &:hover {
    background-color: #c82333;
  }
`;


const Header = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

