import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoadContext = createContext();

export const LoadProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  function start() {
    try {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=java&maxResults=40&startIndex=1`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    } catch (error) {console.log('error ');}
  }

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&startIndex=1`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <LoadContext.Provider
      value={{ start, search, bookData, searchBook, setSearch }}
    >
      {children}
    </LoadContext.Provider>
  );
};

export default LoadContext;
