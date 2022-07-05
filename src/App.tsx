import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import { ProductType } from "./data/typeModels";
import CartModal from "./components/CartModal";

const App: React.FC = () => {
  const [currentCategory, setcurrentCategory] = useState<string>("all");
  /* 
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

  // array.slice() is required to re-render the array state maps.
  const addToCart = (item: ProductType) => {
    let tempCart = cart.slice();
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
  };

  const removeFromCart = (index: number) => {
    let tempCart = cart.slice();
    tempCart.splice(index, 1);
    setCart(tempCart);
  };

  const incrementCartItem = (index: number) => {
    let tempCart = cart.slice();
    tempCart[index].quantity++;
    setCart(tempCart);
  };

  const decrementCartItem = (index: number) => {
    let tempCart = cart.slice();
    if (tempCart[index].quantity > 1) {
      tempCart[index].quantity--;
    } else {
      removeFromCart(index);
    }
    setCart(tempCart);
  };

  const getCartTotal = (): number => {
    let total = 0;
    if (cart.length > 0) {
      cart.forEach((it) => {
        total += it.price * it.quantity;
      });
    }
    return total;
  };

  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  return (
    <div id="App">
      <HashRouter basename="/">
        <Navbar setcurrentCategory={setcurrentCategory} showCart={showCart} />
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
            element={<ProductPage cart={cart} addToCart={addToCart} showCart={showCart} />}
          ></Route>
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} getCartTotal={getCartTotal} />}
          ></Route>
        </Routes>
      </HashRouter>
      <CartModal
        cart={cart}
        cartOn={cartOn}
        closeCart={closeCart}
        removeFromCart={removeFromCart}
        incrementCartItem={incrementCartItem}
        decrementCartItem={decrementCartItem}
        getCartTotal={getCartTotal}
      />
    </div>
  );
};

export default App;
