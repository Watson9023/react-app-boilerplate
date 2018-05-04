import React from 'react';
import { Link } from 'react-router-dom'

import loremIpsum from 'lorem-ipsum';

export default (props) => {
  return (
    <div>
      <h2>View 1</h2>
      {loremIpsum()}
      <Link to="/details">Details</Link>

    </div>
  )
}