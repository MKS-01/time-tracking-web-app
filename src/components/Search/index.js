// import React from 'react';

// function index() {
//   return <div>Search</div>;
// }

// export default index;

import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';

export default class App extends Component {
  data = [
    {
      key: 'sample1',
      value: 'Sample 1',
    },
  ];

  render() {
    return (
      <ReactSearchBox
        placeholder='Search  by name, tag, date_range'
        // value='Doe'
        data={this.data}
        callback={(record) => console.log(record)}
      />
    );
  }
}
