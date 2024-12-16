import { LogOut, Search } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useAuthStore } from '../store/authUser';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {user,logout} =  useAuthStore

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
  return (
   <header className='max-w-6xl mx-auto flex-wrap items-center  justify-between p-4 h-20'>

    <div className='flex items-center gap-10 z-50'>
       <Link to = "/">
        <img src='/netflix-logo.png' alt='Netflix.logo' className='w-32 sm:w-40'/>
       </Link>
       
       {/* desktop navbar items */}
       <div className='hidden sm:flex gap-2 items-center'>
        
       <link to="/" className='hover:underline'>
         Movies
       </link>
       <link to="/" className='hover:underline'>
          TV Shows
       </link>
       <link to="/" className='hover:underline'>
          Search history
       </link>
       </div> 
    </div>

    <div className='flex gap-2 items-center z-50'>
     <Link to={"/search"}>
     <Search className='size-6 cursor-pointer'/>
     </Link>
     <img src={user.image} alt="Avatar" className='h-8 rounded cursor-pointer'/>
     <LogOut className='size-6 cursor-pointer' onClick={logout} />

     <div className='sm:hidden'>
       <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
     </div>

    </div>
 

    {/* mobile navbar items */}
    
    {isMobileMenuOpen && (
      <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
      <Link to={"/"}
        className='block hover:underline p-2' onClick={toggleMobileMenu}
      >
      </Link>
      <Link to={"/search"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
         Search History
      </Link>
      </div>
    )}

   </header>
  )
}

export default NavBar