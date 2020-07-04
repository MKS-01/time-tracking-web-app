import React from 'react';
import Search from './Search';
import Task from './Task';
import CreateTask from './CreateTask';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      {/* {/* <CreateTask /> */}
      {/* <Search /> */}
      {/* <Task /> */}
      {/* <header className='header'></header> */}

      <div class='wrapper'>
        <header className='header'>
          <Search />
        </header>
        <div class='main'>
          <Task />
          <CreateTask />
        </div>
      </div>
    </div>
  );
}

export default App;
