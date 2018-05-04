import React from 'react';
import loremIpsum from 'lorem-ipsum';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <h2>View 2</h2>
      {loremIpsum()}
      <Link to="/">Main</Link>
    </div>
  )
}