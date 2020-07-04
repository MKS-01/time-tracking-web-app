import React from 'react';
import Tags from '../Tags';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';

const GET_TASKS = gql`
  query {
    tasks {
      id
      title
      tags {
        id
        name
      }
      start_time
    }
  }
`;

const Task = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div className='task-parent'>
      <Row data={data} />
    </div>
  );
};

const Row = ({ data }) => {
  // const [text, setText] = React.useState('');
  const { tasks } = data;

  return (
    <div>
      {tasks.map(({ title, id, start_time, tags }) => (
        <div className='row' key={id}>
          <div className='task-row'>
            <form>
              <div>
                {/* <input
                  type='text'
                  name='name'
                  placeholder='title'
                  defaultValue={title}
                  value={text}
                  // onChange={(e) => setText(e.target.value)}
                /> */}
                {title}
              </div>
            </form>{' '}
            <div>00:33:24</div>
            <button>Start</button>
            <button>Stop</button>
          </div>
          <div className='task-row'>
            <Tags tags={tags} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
