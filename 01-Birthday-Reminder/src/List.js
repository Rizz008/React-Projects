import React from 'react';

const List = ({ user }) => {
  return (
    <>
      {user.map((res) => {
        const { id, name, age, image } = res;
        return (
          <div className="person" key={id}>
            <img src={image} alt={name} className='person-img' />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default List;
