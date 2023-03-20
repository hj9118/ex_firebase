import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src='https://i.pinimg.com/564x/53/8b/9a/538b9ad258379c9c13eacb34136e0fe7.jpg' />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
