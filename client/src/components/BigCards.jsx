import React from 'react'
import { Link } from 'react-router-dom'

const BigCards = ({ img, id, color }) => {
  // Returns a card with an image and a link to the details page
  return (
    <Link to={
      color ?
        `/details/${id}?color=${color}` :
        `/details/${id}`
    }>
      <img src={img} alt={id} className='rounded-xl' />
    </Link>
  )
}

export default BigCards