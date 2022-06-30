import React, { useState, useEffect, useContext } from "react";

import Header from "../component/Header";
import Card from "../component/Card";
import { BiSearchAlt } from "react-icons/bi";
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
import LoadContext from "../context/Lodingcontext";

const Home = () => {
  const { start, search, bookData, searchBook, setSearch } =
    useContext(LoadContext);

  useEffect(() => {
    start();
  }, []);


  return (
    <>
      <Header />

      <div className="row2">
        <h6>Find Your Book</h6>
        <div className="search">
          <BiSearchAlt />
          <input
            type="text"
            name="search"
            placeholder="Enter Your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
        </div>
      </div>

      <div className="container">
        {" "}
        {<Card key={bookData.id} book={bookData} />}{" "}
      </div>
      <Aboutus />
      <Footer />
    </>
  );
};

export default Home;
