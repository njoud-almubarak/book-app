//import { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound'
import Loading from './pages/Loading';
//import LoadContext from './context/Lodingcontext';

function App() {
 // const {loading} =useContext(LoadContext);

 // if (loading) {
   // return <Loading />;}

  return (
  //  <>
  //  <LoadContext.Provider>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element= {<Home/>}/>
     <Route path='/Contact' element={<Contact/>}/>
    <Route path='*' element={<Notfound/>}/>
    
    
    </Routes>
        </BrowserRouter>
      //  </LoadContext.Provider>
      //  </>
  );
}

export default App;
