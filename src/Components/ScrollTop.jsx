import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';

const ScrollTop = () => {
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      setTimeout(()=>{    window.scrollTo(0, 0);},300)
     
    }, [pathname]);
  
}

export default ScrollTop;