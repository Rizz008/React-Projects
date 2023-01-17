import React from 'react';
import Tour from './Tour';
const Tours = ({ data, handleClick }) => {
  return <section>
    <div>
      {data.map((res) => {
        return <Tour key={res.id} {...res} handleClick={handleClick} />
      })}
    </div>
  </section>
};

export default Tours;
