import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import ProductContextProvider from './contexts/ProductContext';
import ModalContextProvider from './contexts/ModalContext';

// import Card from './UI/Card/Card';

function App() {
  return (
    <ProductContextProvider>
      <ModalContextProvider>
        <div className="wrapper">
          <Header />
          <main>
            <Product />
          </main>
        </div>
      </ModalContextProvider>
    </ProductContextProvider>
  );
}

export default App;
