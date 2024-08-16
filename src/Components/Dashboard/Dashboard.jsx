import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <button className='btn btn-primary text-white p-2 button'><Link className='text-decoration-none  nav-link' to='/signUp' >Get Started</Link></button>
    </div>
  )
}

export default Dashboard;