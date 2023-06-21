import React from 'react';
import "./footer.css"

function Footer() {
  return (
   <div className="gpt3__footer section__padding" id="#footer">
    <div className="gpt3__footer-container">
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      <button type='button'>Request Early Access</button>
    </div>
    <div className="gpt3__footer-container-content">
      <div className='gpt3__footer-container-content-div1'>
        <h3>GPT-3</h3>
        <p>Crechterwoord K12 182 DK Alknjkcb, <br></br>All Rights Reserved</p>
      </div>
      
      
      <div className='gpt3__footer-container-content-groupB'>
      
      <div className='gpt3__footer-container-content-links'>
        <h3>Links</h3>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-container-content-links'>
        <h3>Company</h3>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-container-content-links'>
        <h3>Get in Touch</h3>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payment</p>
        
      </div>
      </div>
     
    </div>
    <div className='gpt3__footer-container-content-footer'>
       <p>© 2021 GPT-3. All rights reserved.</p> 
      </div>
   </div>
  )
}

export default Footer