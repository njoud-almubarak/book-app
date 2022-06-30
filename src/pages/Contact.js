import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Contactform from '../component/Contactform';
import Contactheader from '../component/Contactheader'


const Contact = () => {

    const Navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const homeclick =function(){
        setLoading(true);
       Navigate('/');};


  return (
    <>
    <Contactheader/>
    <Contactform/>
    
    
    
    </>
  )
}

export default Contact