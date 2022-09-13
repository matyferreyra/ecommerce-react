import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from './components/ItemCount/ItemCount';
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  
return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <NavBar/>
    <Routes>      
      {/* <Route path='/' element={</>}></Route>       */}
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/detail' element={<ItemDetailContainer/>}/>      
      </Routes>     
    </div>
    </BrowserRouter>
  );  
}

export default App;
