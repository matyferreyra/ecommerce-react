import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from './components/ItemCount/ItemCount';
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Pages404 from "../src/Pages/Pages404";
// import { CartProvider } from './context/CartContext';
// import {CartProvider} from "./context/CartContext";


function App() {
  
return (
    // <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <NavBar/>
          <Routes>      
            {/* <Route path='/' element={</>}></Route>       */}
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>  
            {/* <Route path="/cart" element={CartContainer}/> */}
            {/* <Route path='/*' element={<Pages404/>}/>     */}
            </Routes>     
        </div>
      </BrowserRouter>
    // </CartProvider>
  );  
}

export default App;
