"use client";

import { useState } from 'react';
import axios from 'axios';

export default function AddTaskForm({ onTaskAdded }) {
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const addTask = async () => {
        try {
            const response = await axios.post('http://localhost:3001/tasks', newTask);
            onTaskAdded(response.data);
            setNewTask({ title: '', description: '' });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div>
            <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}