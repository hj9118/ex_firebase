import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://i.pinimg.com/564x/f5/07/cd/f507cd7cfc46d8e68b4860ba27f011e0.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://i.pinimg.com/564x/f5/07/cd/f507cd7cfc46d8e68b4860ba27f011e0.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message