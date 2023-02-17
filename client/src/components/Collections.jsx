import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'


export const Collections = () => {

  const { state } = useLocation()

  console.log(state)
  
  return (
    <div>
      <p>ALLO</p>
    </div>
  )
}
