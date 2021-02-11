import React from 'react';

const Heading = () => {
  return (
    <div className="heading_button">
      <h1>todo</h1>
      <button>
        {' '}
        <span className="visually-hidden">Click button to display details</span>
      </button>
    </div>
  );
};

export default Heading;
