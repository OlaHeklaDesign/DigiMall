import React from 'react';
import './GiftCategory.css';


const GiftCategory = ({image, title}) => {

  const bgStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className='giftcategory' style={bgStyle}>
      <div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default GiftCategory