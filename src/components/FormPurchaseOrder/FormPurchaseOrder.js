const FormPurchaseOrder = () => {
    return (
        <form>
            <label>Nombre: </label>
            <input type={"text"} name="nombre"/>
            <label>Apellido: </label>
            <input type={"text"} name="apellido"/>
            <label>N° de teléfono (con el código de área, sin el 0 y sin el 15)</label>
            <input type={"text"} name="telefono"/>
            <label>Correo Electrónico </label>
            <input type={"email"} name="email"/>
            <button type="submit">Confirmar mi orden de compra</button>
        </form>
    )
}

export default FormPurchaseOrder