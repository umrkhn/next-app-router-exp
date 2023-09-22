import TodoCard from '@/components/TodoCard';
import TodoForm from '@/components/TodoForm';

const todos = [
  {
    todo: 'Prepare a detailed project proposal including timelines.',
    isCompleted: true,
    id: '1A3F9B5C',
  },
  {
    todo: 'Research and compile a list of potential vendors for office supplies, negotiate prices, and place orders for essential items by the end of the week.',
    isCompleted: false,
    id: 'F87E2D4A',
  },
  {
    todo: 'Organize a team-building workshop, coordinate with a facilitator, book a suitable venue, and communicate the event details to all team members for their availability',
    isCompleted: false,
    id: '5BCD6FA2',
  },
];

export default function Home() {
  const todoList = todos.map((el) => <TodoCard {...el} key={el.id} />);

  return (
    <main className='h-screen flex justify-center items-center bg-white'>
      <div className='w-full max-w-3xl px-8'>
        <div className='text-center'>
          <h1 className='capitalize text-4xl font-bold text-gray-900'>
            todo list app
          </h1>
          <p className='font-semibold text-gray-600 mt-5'>
            &quot;Stay Organized and Productive with Our Simple Todo List
            App!&quot;
          </p>
        </div>
        <div className='my-8'>
          <TodoForm />
        </div>
        <ul className='grid gap-y-5'>{todoList}</ul>
      </div>
    </main>
  );
}
