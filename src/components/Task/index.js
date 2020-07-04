import React from 'react';
import Tags from '../Tags';

function index() {
  return (
    <div className='task-parent'>
      <Row />
      <Row />
    </div>
  );
}

function Row() {
  return (
    <div className='row'>
      <div className='task-row'>
        <form>
          <div>
            <input type='text' name='name' placeholder='title' />
          </div>
        </form>{' '}
        <div>00:33:24</div>
        <button>Start</button>
        <button>Stop</button>
      </div>
      <div className='task-row'>
        <Tags />
      </div>
    </div>
  );
}

export default index;
