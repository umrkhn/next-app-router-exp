import { PlusIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main>
      <button className='btn'>
        <PlusIcon className='icon-light' />
      </button>
      <button className='btn btn-lg'>
        <PlusIcon className='icon-light' />
      </button>
    </main>
  );
}
