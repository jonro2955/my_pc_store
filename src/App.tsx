import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

const App: React.FC = () => {
  return (
    <div id="App">
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
