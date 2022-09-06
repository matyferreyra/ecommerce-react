import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="¡Hola! Soy un contador de items"/>
      <ItemCount stock={10} initial={0} click={onAdd}/>      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />              
      </header>
    </div>
  );

  function onAdd (counter){
    return
    console.log(counter);
  }

  onAdd();
  
}

export default App;
