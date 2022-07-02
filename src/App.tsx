import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

const App: React.FC = () => {
  const [currentCategory, setcurrentCategory] = useState<string>("all");

  return (
    <div id="App">
      <HashRouter basename="/">
        <Navbar setcurrentCategory={setcurrentCategory}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop currentCategory={currentCategory} setcurrentCategory={setcurrentCategory}/>}></Route>
          <Route path="/:productId" element={<Product />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
