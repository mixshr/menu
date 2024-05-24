import React from 'react';

const Menu = ({title}) => {
  return <div className='title'>
    <h2>{title || 'Default title'}</h2>
    <div className='underline'></div>
  </div>;
};

export default Menu;
