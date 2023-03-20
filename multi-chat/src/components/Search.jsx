import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://i.pinimg.com/564x/53/8b/9a/538b9ad258379c9c13eacb34136e0fe7.jpg' />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
