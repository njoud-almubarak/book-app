import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contactform = () => {
  const Navigate=useNavigate();

  const sendclick =function(){
   Navigate('/Contact');};


  return (
    <>
    <div className="countactus">
  <h1></h1>
</div>

<div className="row">
<div className="col-3">
  <ul style={{ marginRight:'2rem' ,}}>
  </ul>
</div>

<div className="col-9">

       <div> <label htmlFor="fname" style={{ color:'gray', marginTop:'1rem', marginBottom:'1px',paddingLeft:'1rem'}}>First Name</label></div>

        <input type="text" id="fname" name="firstname" placeholder='Enter Your Frist Name' style={{width:'145vh',height:'3rem', marginLeft:'1rem',paddingLeft:'1rem',border:'none' }}/>

        <div> <label htmlFor="fname"  style={{  color:'gray',marginTop:'1rem', marginBottom:'1px',paddingLeft:'1rem'}}>Last Name</label></div>

        <input type="text" id="fname" name="firstname" placeholder="Enter Your Last Name" style={{width:'145vh', paddingLeft:'1rem' , height:'3rem',marginLeft:'1rem',border:'none'}}/>

        <div> <label htmlFor="fname" style={{ color:'gray', marginTop:'1rem', marginBottom:'1px',paddingLeft:'1rem'}}>Massage</label></div>
     
        <input type="textarea" id="fname" name="firstname" placeholder="Your Massage" style={{width:'145vh',height:'100px' ,paddingLeft:'1rem' , height:'3rem',marginBottom:'1rem',marginLeft:'1rem',border:'none',color:'gray'}}/>
        <button type="submit" value="Send" className="footer-link3"  target="_blank" onClick={sendclick} >
<a type='button' href = "mailto: abc@example.com" style={{color:'gray'}}></a>Send</button>
</div>





</div>
<div className="footer"></div>

</>
  )
}

export default Contactform