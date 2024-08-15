import { useState, useEffect, useCallback } from 'react';
import { saveTasksToLocalStorage, getTasksFromLocalStorage } from '../utils/localStorage';
import { getTasks, addTask, updateTask, deleteTask } from '../api/tasksApi';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [filterStatus, setFilterStatus] = useState('All');
    const [LoderStatus, setLoderStatus] = useState(true)

    useEffect(() => {
        const fetchTasks = async () => {
            let data = getTasksFromLocalStorage()

            if (data && data.length !== 0) {
                setTasks(data)
                setLoderStatus(false)
            } else {
                try {
                    const initialTasks = await getTasks();
                    setTasks(initialTasks);
                    saveTasksToLocalStorage(initialTasks);
                } catch (error) {
                    console.log("error", error);
                } finally {
                    setLoderStatus(false)
                }
            }

        };

        fetchTasks();
    }, []);

    const handleAddTask = useCallback(async (task) => {
        const id = new Date().getTime().toString();
        const newTask = { id, ...task };
        setTasks(s => [...s, { ...newTask, uploadStatus: 'uploading' }]);
        try {
            await addTask({ ...newTask, uploadStatus: 'uploaded' });
            setTasks(prevTasks =>
                prevTasks.map(t =>
                    t.id === id ? { ...t, uploadStatus: 'uploaded' } : t
                )
            );
        } catch (error) {
            console.log("error", error);
            setTasks(prevTasks =>
                prevTasks.map(t =>
                    t.id === id ? { ...t, uploadStatus: 'dontUpload' } : t
                )
            );
        }
    }, []);

    const handleUpdateTask = useCallback(async (updatedTask) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === updatedTask.id
                    ? { ...updatedTask, uploadStatus: 'uploading' }
                    : task
            )
        );
        try {
            await updateTask(updatedTask);
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === updatedTask.id
                        ? { ...updatedTask, uploadStatus: 'uploaded' }
                        : task
                )
            );
        } catch (error) {
            console.log("error", error);
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === updatedTask.id
                        ? { ...updatedTask, uploadStatus: 'dontUpload' }
                        : task
                )
            );
        }
    }, []);

    const handleDeleteTask = useCallback(async (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        await deleteTask(taskId);
    }, []);

    useEffect(() => {
        saveTasksToLocalStorage(tasks)
    }, [tasks])

    return {
        tasks,
        filterStatus,
        setFilterStatus,
        handleAddTask,
        handleUpdateTask,
        handleDeleteTask,
        LoderStatus,
    };
};

export default useTasks;
