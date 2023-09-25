import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const CareerLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, enim?</p>
        
        <Outlet />
    </div>
  )
}

export default CareerLayout