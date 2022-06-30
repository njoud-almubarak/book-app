import React,{useState,useEffect} from "react";
import axios from "axios";
import Header from '../component/Header'
import Card from "../component/Card";
import {BiSearchAlt} from "react-icons/bi";
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
import { useNavigate } from 'react-router-dom';
//import Loadcontext from '../context/Lodingcontext';
//import { useContext } from 'react';

const Home = () => {


    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const Navigate=useNavigate();
   // const {loading} =useContext(Loadcontext);

    useEffect(() => {
        try {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=java&maxResults=40&startIndex=1`)
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
            } 
         
         catch (error) {
            Navigate('/');
        }
      }, []);

    const searchBook=(e)=>{
     //   loading=true;
        if(e.key==="Enter")
        {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&startIndex=1`)
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
  return (
   <>
  
   <Header/>

   <div className="row2">
                    <h6>Find Your Book</h6>
                    <div className="search">
                        <BiSearchAlt/>
                        <input  type="text"  name="search" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                       </div></div>
   
   
                        <div className="container"> {
                    <Card key={bookData.id} book={bookData}/> }    </div>
                    <Aboutus/>
            <Footer/>
   
   
   
   
   </>
  )
}

export default Home

