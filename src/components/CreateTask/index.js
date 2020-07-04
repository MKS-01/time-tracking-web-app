import React from 'react';
import Tags from '../Tags';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_TAGS = gql`
  query {
    tags {
      name
      id
    }
  }
`;

function index() {
  return (
    <div className='create-task-parent'>
      <h4>Create Task</h4>

      <form>
        <input type='text' name='name' placeholder='title' />

        <TagComponent />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

const TagComponent = () => {
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <div>
      <Tags tags={data.tags} />
    </div>
  );
};

export default index;
