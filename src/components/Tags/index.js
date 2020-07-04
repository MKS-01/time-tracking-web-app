import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div>
      <ul>
        {tags.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
