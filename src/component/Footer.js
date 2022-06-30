import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'


const Footer = () => {
    const Navigate=useNavigate();
    
    
    const cotactclick =function(){
       // setLoading(true);
       Navigate('/Contact');};

  return (
   
  <>
   <div className="footer">
   <button className="footer-link"  target="_blank" to='/Contact'onClick={cotactclick}>Contact us</button>


   </div>
  </>
  )
}

export default Footer