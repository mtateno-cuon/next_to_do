import axios from 'axios';
import TodoPage from '../../components/TodoPage';

async function fetchTasks() {
  try {
    const response = await axios.get('http://backend:3000/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
}

export default async function Page() {
  const initialTasks = await fetchTasks();

  return (
    <div>
      <TodoPage initialTasks={initialTasks} />
    </div>
  );
}
