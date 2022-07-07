import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ProductType } from "./data/typeModels";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Checkout1 from "./pages/Checkout1";
import Checkout2 from "./pages/Checkout2";
import Checkout3 from "./pages/Checkout3";
import ThankPage from "./pages/ThankPage";

const App: React.FC = () => {
  const [currentCategory, setcurrentCategory] = useState<string>("all");
  /* 
  interface ProductType {
    id: string,
    name: string,
    description:string,
    category: string,
    price: number,
    quantity: 1,
    image: string,
    gallery: string[],
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
    let amount = 0;
    if (cart.length > 0) {
      cart.forEach((it) => {
        amount += it.price * it.quantity;
      });
    }
    return amount;
  };

  const getCartTally = (): number => {
    let total = 0;
    if (cart.length > 0) {
      cart.forEach((it) => {
        total += it.quantity;
      });
    }
    return total;
  };

  const setBuyNow = (item: ProductType): void => {
    let tempCart = cart.slice();
    tempCart = [item];
    setCart(tempCart);
  };

  const clearCart = (): void => {
    let tempCart = cart.slice();
    tempCart = [];
    setCart(tempCart);
  };

  return (
    <div id="App">
      <HashRouter basename="/">
        <Navbar
          setcurrentCategory={setcurrentCategory}
          getCartTally={getCartTally}
          showCart={showCart}
        />
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
                setBuyNow={setBuyNow}
              />
            }
          ></Route>
          <Route path="/checkout1" element={<Checkout1 />}></Route>
          <Route path="/checkout2" element={<Checkout2 />}></Route>
          <Route
            path="/Checkout3"
            element={
              <Checkout3
                cart={cart}
                getCartTally={getCartTally}
                getCartTotal={getCartTotal}
                removeFromCart={removeFromCart}
                incrementCartItem={incrementCartItem}
                decrementCartItem={decrementCartItem}
                clearCart={clearCart}
              />
            }
          ></Route>
          <Route path="/thankyou" element={<ThankPage />}></Route>
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
