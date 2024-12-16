import React from 'react'
import { useAuthStore } from '../../store/authUser'

function HomeScreen() {
  const { logout } = useAuthStore();

  return (
    <div className='relative h-screen text-white'> 
        {/* <Navbar/> */}
        <button onclick={logout}>logout</button>
    </div>
  )
}

export default HomeScreen
