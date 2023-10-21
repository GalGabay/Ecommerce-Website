// this is a component that shows a loading spinner instead of a loading text as we did earlier in the course.

import { Spinner } from 'react-bootstrap';
import React from 'react'

const Loader = () => {
  return (
    <Spinner
        animation='border'
        role='status'
        style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block", // center the data
        }}
        ></Spinner>
  );
};

export default Loader