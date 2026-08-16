import React from 'react'
import '../styles.css'

export const Footer=()=> {
    const currentYear = new Date().getFullYear();
  return (
   <footer className='footer'>
     <p className='footer-text'>© {currentYear} moviedux. All rights reserved.</p>
   </footer>
  )
}

export default Footer
