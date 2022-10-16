import "./FormPurchaseOrder.css";

const FormPurchaseOrder = () => {
    return (
        <form className="infoConsumer">
            <h3>INGRESE SU INFORMACIÓN DE CONTACTO:</h3>
            <div>
                <label className="styleInput">Nombre: </label>
                <input className="styleInput" type={"text"} name="nombre" required size={35}/>
            </div>
            <div>
                <label className="styleInput">Apellido: </label>
                <input className="styleInput" type={"text"} name="apellido" required size={35}/>
            </div>
            <div>
                <label className="styleInput">N° de teléfono: </label>
                <input className="styleInput" id="contactNumber" placeholder="(con el código de área, sin el 0 y sin el 15)" type={"tel"} name="telefono" required size={35}/>
            </div>
            <div>
                <label className="styleInput">Correo Electrónico: </label>
                <input className="styleInput" type={"email"} name="email" required size={35}/>
            </div>
            <button id="confirmBuy" type="submit">Confirmar compra y continuar al pago</button>
        </form>
    )
}

export default FormPurchaseOrder