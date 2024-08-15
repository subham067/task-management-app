import React, { Suspense, lazy } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import useTasks from './hooks/useTasks';
import AddTaskForm from './components/AddTaskForm';
import LoaderComponent from './components/LoaderComponent';
import styled from 'styled-components';

// Lazy load components
const TaskList = lazy(() => import('./components/TaskList'));

const App = () => {
  const { tasks, filterStatus, setFilterStatus, handleAddTask, handleUpdateTask, handleDeleteTask, LoderStatus } = useTasks();

  return (
    <Container>
      <GlobalStyle />
      <Header>Task Management App</Header>
      <AddTaskForm onAdd={handleAddTask} />
      <SelectWrapper>
        <TasksHeading>All Tasks</TasksHeading>
        <StyledSelect value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </StyledSelect>
      </SelectWrapper>

      {LoderStatus ? <LoaderComponent /> :
        <Suspense fallback={<LoaderComponent />}>
          <TaskList
            tasks={tasks}
            onEdit={handleUpdateTask}
            onDelete={handleDeleteTask}
            filterStatus={filterStatus}
          />
        </Suspense>}
    </Container>
  );
};

export default App;

// Styled Components

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`;

const SelectWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #007bff;
  }
`;

const TasksHeading = styled.h2`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
`;
