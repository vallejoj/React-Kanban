import React from 'react';
import ShiftCardRight from './ShiftCardRight.js'


const Card = ({ name,description }) => {
  return (
        <div className="col-md-3">
      { name }
      <br/>
      {description}
      <button>Right</button>
    </div>
  )
}

export default Card
