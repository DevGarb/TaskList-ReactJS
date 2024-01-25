// Task.tsx
interface TaskProps {
  task: {
    id: string;
    name: string;
  };
  onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: TaskProps) {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="w-full flex justify-between bg-zinc-200 mb-2 last:mb-0 px-5 py-3 rounded border-[2px] border-zinc-400">
      <p>{task.name}</p>
      <button onClick={handleDelete} className="text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

      </button>
    </div >
  );
}

