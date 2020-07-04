import React from 'react';
import Tags from './Tags';

function index() {
  return (
    <div className='create-task-parent'>
      <h4>Create Task</h4>

      <form>
        <input type='text' name='name' placeholder='title' />

        <Tags />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default index;
