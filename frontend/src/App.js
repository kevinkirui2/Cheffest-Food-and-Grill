
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CombinedLonding from "./combinedLanding";
import Lunch from "./components/Menu/Lunch";
import Cart from "./components/Menu/cart";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<CombinedLonding/>}></Route>
        <Route path="/menu" element={<Lunch/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
       


      </BrowserRouter>

       
    </div>
  );
}

export default App;
