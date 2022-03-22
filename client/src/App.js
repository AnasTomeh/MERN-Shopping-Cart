
import React, { useState } from 'react'
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
//import { words } from "./words";
import data from './data.json'
import Products from './components/Products/Products'
import Filter from './components/Filtter/Filter'

function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")

  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data)
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.size.indexOf(e.target.value) !== -1)
      setProducts(newProducts)

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

  }
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            handelFilterBySize={handelFilterBySize}
            handelFilterByOrder={handelFilterByOrder}
            sort={sort}
            size={size} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
