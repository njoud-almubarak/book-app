import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import { LoadProvider } from "./context/Lodingcontext";
function App() {
  return (
    <LoadProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </LoadProvider>
  );
}

export default App;
