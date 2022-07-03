import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import { ProductType } from "./data/typeModels";
import CartModal from "./components/CartModal";

const App: React.FC = () => {
  const [currentCategory, setcurrentCategory] = useState<string>("all");
  /* A product is an object of the following format:

  interface Product {
    id: string,
    name: string,
    description:string,
    category: string,
    price: number,
    quantity: 1,
    image: string,
    gallery: string[],
  }

  example: 
  {
    id: "keyboard",
    name: "Keyboard",
    description:"Backlit / Brightness Dial",
    category: "accessories",
    price: 50,
    quantity: 1,
    image: acc1,
    gallery: [acc1],
  }
  */

  const [cart, setCart] = useState<Array<ProductType>>([]);
  const [cartOn, setCartOn] = useState<Boolean>(false);
  const showCart = () => setCartOn(true);
  const closeCart = () => setCartOn(false);

  const addToCart = (item: ProductType) => {
    let tempCart = cart;
    let existingItem = tempCart.find((x) => {
      return x.id === item.id;
    });
    if (existingItem) {
      let existingItemIndex = tempCart.indexOf(existingItem);
      tempCart[existingItemIndex].quantity++;
    } else {
      tempCart.push(item);
    }
    setCart(tempCart);
    console.log(tempCart);
  };

  const removeFromCart = (index: number) => {
    let tempCart = cart;
    tempCart.splice(index, 1);
    console.log(tempCart);
    setCart(tempCart);
  };

  return (
    <div id="App">
      <HashRouter basename="/">
        <Navbar setcurrentCategory={setcurrentCategory} showCart={showCart}/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/shop"
            element={
              <ShopPage currentCategory={currentCategory} setcurrentCategory={setcurrentCategory} />
            }
          ></Route>
          <Route
            path="/:productId"
            element={
              <ProductPage
                cart={cart}
                addToCart={addToCart}
                showCart={showCart}
                closeCart={closeCart}
              />
            }
          ></Route>
        </Routes>
      </HashRouter>
      <CartModal
        cart={cart}
        cartOn={cartOn}
        showCart={showCart}
        closeCart={closeCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
