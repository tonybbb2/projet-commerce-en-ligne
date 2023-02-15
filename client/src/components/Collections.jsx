import React from 'react'
import { useLocation } from 'react-router-dom'

export const Collections = () => {

  const { category } = useLocation().state

  console.log(category)

  return (
    <div>
      <p></p>
    </div>
  )
}
