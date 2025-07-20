
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CombinedLonding from "./combinedLanding";
import Lunch from "./components/Menu/Lunch";
import Contact from "./components/contact";
import Cart from "./components/Menu/cart";
import Blog from "./components/blog";
import './index.css'; // Import the Tailwind CSS file
function App() {
  return (
    <div className="App">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<CombinedLonding/>}></Route>
        <Route path="/menu" element={<Lunch/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
       


      </BrowserRouter>

       
    </div>
  );
}

export default App;
