import "./ItemCount.css";
import {useState} from "react";


const ItemCount = (props) =>{
    const [counter,setCounter] = useState(props.initial); //función para sumar y restar items con un State
        
    const addItemCounter = () => {
        if (counter<props.stock) {
            setCounter (counter+1)
        }}
        const restItemCounter = () => {
            if (counter>props.initial){
            setCounter (counter-1)
        }}
    return (
        <>
        {
            props.stock<1
            ? <p>
                No hay stock
            </p> :     
        <>
            <div className="order">
                <button className="butt" onClick={restItemCounter}>-</button>                
                {/* <div>Cantidad de Items</div> */}
                <h1>{counter}</h1>
                <button className="butt" onClick={addItemCounter}>+</button>
            </div>
            <div>
                <button onClick={()=> {props.onAdd(counter)}} className="addCart">Agregar producto al carro de compras</button>
            </div>
        </>
            }
        </>
);
};

export default ItemCount;