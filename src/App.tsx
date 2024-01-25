// App.tsx
import { useState, FormEvent } from 'react';
import { TaskList } from './components/tasks/TaskList';
import ContactForm from './components/wpp-api/ContactForm';

function App() {
  const [newTask, setNewTask] = useState('');

  const [tasks, setTasks] = useState([
    {
      id: '',
      name: '',
    },
  ]);

  const [phoneNumber, setPhoneNumber] = useState('');

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (newTask === '') return;

    const newItem = {
      id: `${tasks.length}`,
      name: newTask,
    };

    setTasks((allTasks) => [...allTasks, newItem]);
    setNewTask('');
  }

  const handleDelete = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center px-4 pt-52">
      <h1 className="font-bold text-4xl text-white mb-4">CRUD TODOLIST</h1>

      <form className="w-full max-w-2xl mb-4 flex" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Digite o nome da tarefa..."
          className="flex-1 h-10 rounded-md px-2"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 ml-4 rounded-md px-4 text-white font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </button>
      </form>

      <TaskList tasks={tasks} onDelete={handleDelete} />

      <div className="w-full max-w-2xl mb-4">
        <ContactForm tasks={tasks} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
      </div>
    </div>
  );
}

export default App;
