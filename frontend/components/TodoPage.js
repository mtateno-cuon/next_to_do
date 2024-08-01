"use client"; // クライアントコンポーネントとして指定

import { useState } from 'react';
import AddTaskForm from './AddTaskForm';

export default function TodoPage({ initialTasks }) {
    const [tasks, setTasks] = useState(initialTasks);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
    <div>
        <AddTaskForm onTaskAdded={handleTaskAdded} />
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                </li>
            ))}
        </ul>
    </div>
    );
}