// TaskList.tsx
import { Task } from './Task';

interface TaskListProps {
  tasks: Array<{ id: string; name: string }>;
  onDelete: (taskId: string) => void;
}

export function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <section className="bg-zinc-100 p-5 rounded-md w-full max-w-2xl">
      <div className="flex justify-center text-white font-mono font-semibold bg-gray-600 mb-3 last:mb-0 px-5 py-2 rounded-lg opacity-80">
        Lista de Tarefas
      </div>
      <article>
        {tasks.slice(1).map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </article>
    </section>
  );
}
