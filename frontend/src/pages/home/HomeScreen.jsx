import React from 'react'
import { useAuthStore } from '../../store/authUser'

function HomeScreen() {
  const { logout } = useAuthStore();

  return (
    <div> 
        <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default HomeScreen
