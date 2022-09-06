import cart from "../../assets/icon_cart_32px_f4c3b4.png"

const CartWidget = () => {
    return(
        <div className="margenDerecho">
                <ul>
                <li><a href="#"><img className="cart" src={cart} alt="cart"/></a></li>
                <li><button> loggin </button></li>
                </ul>
        </div>
    )
}

export default CartWidget;