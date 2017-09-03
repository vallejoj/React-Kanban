import React from 'react';
import ShiftCardRight from './ShiftCardRight.js'


const Card = ({ name }) => {
  return (
        <div className="col-md-1">
      { name }
      <button>Right</button>
    </div>
  )
}

export default Card
