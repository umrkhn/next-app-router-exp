import TodoForm from '../components/TodoForm';

export default function Home() {
  return (
    <main className='h-screen flex justify-center items-center mx-12'>
      <div className='w-full max-w-3xl px-8'>
        <TodoForm />
      </div>
    </main>
  );
}
