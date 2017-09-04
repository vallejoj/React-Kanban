import React from 'react';
import ShiftCardRight from './ShiftCardRight.js'


const Card = ({ name,description }) => {
  return (
        <div className="col-md-3 card">
      { name }
      <br/>
      {description}
    
    </div>
  )
}

export default Card
