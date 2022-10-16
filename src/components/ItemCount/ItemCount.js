import "./ItemCount.css";
import {useState} from "react";


const ItemCount = (props) =>{
    const [counter,setCounter] = useState(props.initial); 
        
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
            <div className="styleCounter">
                <button className="countItem less" onClick={restItemCounter}>-</button>                                
                <p id="counter">{counter}</p>
                <button className="countItem more" onClick={addItemCounter}>+</button>
            </div>
            <div>
                <button onClick={()=> {props.onAdd(counter)}} className="addCart">Agregar producto al carrito</button>
            </div>
            <div>
                <button onClick={()=> {props.puttOff(counter)}} className="removeCart">Quitar producto del carrito</button>
            </div>
        </>
            }
        </>
);
};

export default ItemCount;