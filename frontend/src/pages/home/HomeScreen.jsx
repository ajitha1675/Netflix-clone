import React from 'react'
import Navbar from '../../component/NavBar'
import { useAuthStore } from '../../store/authUser'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import UseGetTrendingContent from '../../hooks/UseGetTrendingContent'


const HomeScreen = () => {
  const {trendingContent} = UseGetTrendingContent();
  console.log("treandingContent", trendingContent);
  
  return (
    <>
    <div className='relative h-screen text-white'> 
       <Navbar/>
      
       <img src="/extraction.jpg" 
       alt='Hero img'
       className='absolute top-0 left-0 w-full h-full object-cover -z-50' />

       <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true'>
         <div
           className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'
         />

       <div className='max-w-2xl'>
        <h1 className='mt-4 text-6xl font-extrabold text-balance'>
            {trendingContent?. title || trendingContent?. name}
        </h1>
        <p className='mt-2 text-lg'>  
          {trendingContent?.release_date?.split("-")[0]||
            trendingContent?.first_air_date.split("-")[0]}{""}
          |{ trendingContent?. adult? "18+" : "PG-13"} </p>

        <p className='mt-4 text-lg'>
          A young man's obsession with a mysterious woman leads him down a dark path in this psychological thriller
        </p>
       </div>

       <div className='flex mt-8'>
         <Link to="/watch/123"
         className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center'
         >
         <Play className='size-6  mr-2 fill-black'/>
          Play
         </Link>

         <Link to="/watch/123"
         className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'
         >
         <Info className='size-6  mr-2 fill-black'/>
          More Info
         </Link>
       </div>
       </div>
        
      
       
    </div>
    </>
  )
}

export default HomeScreen;
