import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContentStore } from '../store/content';

const UseGetTrendingContent = () => {
   const [trendingContent, setTrendingContent] = useState(null);
   const{contentType} = useContentStore();

   useEffect(() =>{
    const getTrendingContent = async () =>{
      const res = await axios.get(`/api/v1/${contentType}/trending`)
      setTrendingContent(res.data.content)
    }

    getTrendingContent();
   }, [contentType]);

   return {trendingContent};
}

export default UseGetTrendingContent
