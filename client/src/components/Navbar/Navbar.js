import React from 'react'
import { NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar'>
              <ul>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/orders">Orders</NavLink> </li>
              </ul>
            </div>
  )
}
