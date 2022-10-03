
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartBuy from './components/CartBuy/CartBuy';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages404 from "../src/Pages/Pages404";
import { CartProvider } from './context/CartContext';



function App() {
  
return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <NavBar/>
          <Routes>      
            {/* <Route path='/' element={</>}></Route>       */}
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>  
            <Route path="/cart" element={<CartBuy/>}/>
            <Route path='/*' element={<Pages404/>}/>    
          </Routes>     
        </div>
      </BrowserRouter>
    </CartProvider>
  );  
}

export default App;
