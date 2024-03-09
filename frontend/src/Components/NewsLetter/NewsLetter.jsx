import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p1>Subscribe to our newsletter and stay updated</p1>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
