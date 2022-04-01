
import React from 'react'
import Cart from './components/Cart/Cart';
import Filter from './components/Filtter/Filter'
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Products from './components/Products/Products'
import { Provider } from 'react-redux'
import store from './store/store';

function App() {




  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products />
            <Filter />

          </div>
          <Cart />
        </main>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
