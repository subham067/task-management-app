import styled from 'styled-components';
import TaskItem from './TaskItem';
import { useCallback, useMemo, useState } from 'react';
import EditTaskModal from './EditTaskModal';
import NoDataFound from './NoDataFound';



const TaskList = ({ tasks, onEdit, onDelete, filterStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({})
  const filteredTasks = useMemo(() =>
    tasks.filter(task =>
      filterStatus === 'All' || task.status === filterStatus
    ),
    [tasks, filterStatus]
  );
  const onPressEdit = useCallback((task) => {
    setEditedTask(task)
    setIsEditing(true)
  }, [])

  return (
    <>
      {isEditing && (
        <EditTaskModal
          task={editedTask}
          onSave={(updatedTask) => {
            onEdit(updatedTask);
            setIsEditing(false);
          }}
          onClose={() => setIsEditing(false)}
        />
      )}

      {filteredTasks.length === 0 ? (
        <NoDataFound />
      ) : (
        <StyledTaskList>
          {filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onPressEdit={onPressEdit}
              onDelete={onDelete}
            />
          ))}
        </StyledTaskList>
      )}
    </>
  );
};

export default TaskList;


const StyledTaskList = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Space between cards */

  @media (min-width: 576px) {
    gap: 12px;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 992px) {
    gap: 20px;
  }
`;
