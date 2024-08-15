const API_URL = 'http://localhost:5001/tasks'; // mock API endpoint

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addTask = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  return response.json();
};

export const updateTask = async (task) => {
  const response = await fetch(`${API_URL}/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  return response.json();
};

export const deleteTask = async (taskId) => {
  await fetch(`${API_URL}/${taskId}`, {
    method: 'DELETE',
  });
};
