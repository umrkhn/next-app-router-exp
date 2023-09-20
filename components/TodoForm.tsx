'use client';
import { useState, FormEvent } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface FormValues {
  todo: string;
}

const initialValue = {
  todo: '',
};

export default function TodoForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValue);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    // write to db
  };

  return (
    <form className='flex items-center' onSubmit={handleFormSubmit}>
      <input
        className='input mr-8 w-full placeholder:capitalize text-center'
        type='text'
        placeholder='type something...'
        onChange={(e) => setFormValues({ todo: e.target.value })}
      />
      <button className='btn btn-lg'>
        <PlusIcon className='icon-light' />
      </button>
    </form>
  );
}
