import React from 'react'
import {useState} from 'react'



function ScrollBtn() {

    const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <button className='scroll-btn'>
        <i className="fas fa-chevron-circle-up" onClick={scrollToTop} 
    style={{display: visible ? 'block' : 'none'}}></i>
   </button>
  )
}

export default ScrollBtn