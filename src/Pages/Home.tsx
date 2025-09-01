import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Sidebar + Content side by side */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Content on the right */}
        <div className="flex-1 p-4">
          <Dashboard/>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
