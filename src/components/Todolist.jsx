import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTheTask, myTodoStore, completeTask, removeTask } from '../redux';

const Todolist = () => {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();
  const tasksData = useSelector(function (output) {
    return output.todo.addTask;
  });

  const handleTaskChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const submitTask = () => {
    if (task.trim().length === 0) {
      alert('Enter a task before adding');
      setTask('');
      return;
    }

    dispatch(
      addTheTask({
        task,
        id: tasksData.length,
      })
    );

    setTask('');
  };
  const handleTaskCompleted = () => {
    dispatch(completeTask(true));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className='main-div'>
      <div className='second-div'>
        <input
          className='addtask'
          type='text'
          value={task}
          name='text'
          onChange={handleTaskChange}
          placeholder='Add Task'
        />
        <button className='submit-btn' onClick={submitTask}>
          Add Task
        </button>
      </div>
      <div className='task-list'>
        {tasksData.map((task) => (
          <div className='list-div' key={task.id}>
            <input type='checkbox' onChange={handleTaskCompleted} />
            <li>{task.task}</li>
            <div>
              <svg
                onClick={() => handleRemoveTask(task.id)}
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='50'
                height='30'
                viewBox='0 0 24 24'
              >
                <path d='M3 3H21V5H3z'></path>
                <path d='M16.1,22H7.9c-1,0-1.9-0.7-2-1.7L4,4.1l2-0.2L7.9,20l8.2,0L18,3.9l2,0.2l-1.9,16.1C18,21.3,17.1,22,16.1,22z'></path>
                <path
                  d='M5,4l1.9,16.1c0.1,0.5,0.5,0.9,1,0.9h8.2 c0.5,0,0.9-0.4,1-0.9L19,4H5z'
                  opacity='.3'
                ></path>
                <path d='M15 3L15 4 9 4 9 3 10 2 14 2z'></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
