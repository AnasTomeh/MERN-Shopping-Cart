
import React, { useState, useEffect } from 'react'
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
//import { words } from "./words";
import data from './data.json'
import Products from './components/Products/Products'
import Filter from './components/Filtter/Filter'
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux'
import store from './store/store';

function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")
  const [cartItems, setCartItems] = useState([JSON.parse(localStorage.getItem('cartItems'))])


  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data)
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.size.indexOf(e.target.value) !== -1)
      setProducts(newProducts)
      //console.log(newProducts)

    }

    // console.log(e.target.value)

  }

  const handelFilterByOrder = (e) => {
    let order = e.target.value
    setSort(order);
    //console.log(e.target.value);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order === "Lowest") {
        return a.price - b.price
      }
      else if (order === "Highest") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts)
    //console.log(newProducts)

  }

  const addToCart = (product) => {

    const cartItemsClone = [...cartItems];
    console.log(product)
    console.log(cartItems)
    let isProductExsit = false;
    cartItemsClone.forEach(p => {
      //console.log(p)
      if (p.id === product.id) {
        p.qty++
        isProductExsit = true;
      }
    })
    if (isProductExsit) {
      cartItemsClone.push({ ...product, qty: 1 })
    }
    setCartItems(cartItemsClone);


  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter(p => p.id !== product.id))
  }
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              productsNumber={products.length}
              handelFilterBySize={handelFilterBySize}
              handelFilterByOrder={handelFilterByOrder}
              sort={sort}
              size={size} />


          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
