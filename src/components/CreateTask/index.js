import React, { useState } from 'react';
import Tags from '../Tags';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_TASK = gql`
  mutation($title: String!) {
    insert_tasks_one(
      object: {
        title: $title
        task_tags: { data: [{ tag_id: 16 }, { tag_id: 17 }] }
      }
    ) {
      id
      title
      task_tags {
        tag_id
        tag {
          name
        }
      }
    }
  }
`;

const GET_TAGS = gql`
  query {
    tags {
      name
      id
    }
  }
`;

const CreateTask = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState('');

  const [createTask] = useMutation(CREATE_TASK);
  return (
    <div className='create-task-parent'>
      <h4>Create Task</h4>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTask({ variables: { title: title } });
        }}>
        <input
          type='text'
          name='name'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <TagComponent />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

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

export default CreateTask;
