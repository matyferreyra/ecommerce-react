import "./ItemCount.css";
import {useState} from "react";


const ItemCount = (props) =>{
    const [counter,setCounter] = useState(props.initial); //función para sumar y restar items con un State
        const more = () => {
            setCounter (counter+1)
        }
        const less = () => {
            setCounter (counter-1)
        }
    return (
        <>
            <div className="order">
                <button className="butt" onClick={less}>-</button>                
                {/* <div>Cantidad de Items</div> */}
                <h1>{counter}</h1>
                <button className="butt" onClick={more}>+</button>
            </div>
            <div>
                <button onClick={props.click} className="addCart">Agregar producto al carro de compras</button>
            </div>
        </>
);
};

export default ItemCount;