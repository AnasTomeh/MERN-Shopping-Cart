
import React , {useState} from 'react'
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
//import { words } from "./words";
import data from './data.json'
import Products from './components/Products/Products'
import Filter from './components/Filtter/Filter'

function App() {
  const [products, setProducts] = useState(data)
  return (
    <div className="layout">
      <Header />
      <main>
      <div className="wrapper">
      <Products  products={products}/>
      <Filter />
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
