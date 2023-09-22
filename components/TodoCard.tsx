'use client';
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function TodoCard(props: Todo) {
  const { todo, isCompleted } = props;
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // set the state
    setIsChecked(e.target.checked);
    // update the changes to db
  };
  const handleParagraphBlur = (e: React.FormEvent<HTMLParagraphElement>) => {
    console.log(e.currentTarget.innerText);
    /* debounce the input */
    /* update changes to db*/
  };

  const renderTodo = () => {
    const styles = 'font-medium text-gray-600 grow';
    if (isChecked) return <del className={styles}>{todo}</del>;

    return (
      <p
        className={styles}
        contentEditable
        onBlur={handleParagraphBlur}
        suppressContentEditableWarning
      >
        {todo}
      </p>
    );
  };

  return (
    <li className='flex items-center gap-x-8 px-8 py-5 rounded border border-gray-200 bg-gray-50'>
      <div className='flex'>
        <input
          type='checkbox'
          className='accent-gray-700 w-6 h-6'
          defaultChecked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      {renderTodo()}
      <button className='btn'>
        <TrashIcon className='icon-light' />
      </button>
    </li>
  );
}
