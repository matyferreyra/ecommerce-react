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
  
  const onAdd = (counter) => {
    console.log(counter);
  }
  
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <NavBar/>
    <Routes>      
      <Route path='/' element={<ItemDetailContainer/>}></Route>
      {/* <ItemListContainer titulo="¡Hola! Soy un contador de items"/> */}
      {/* <Route path='/list' element={<ItemListContainer/>}></Route> */}
      {/* <Route path='/detail' element={<ItemListContainer/>}></Route> */}            
      {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/>             */}
      {/* <img src={logo} className="App-logo" alt="logo" />               */} 
      </Routes>     
    </div>
    </BrowserRouter>
  );  
}

export default App;
