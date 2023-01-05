import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const CartTotal = () => {

    const {setListProductsCart, counterSale, setCounterSale} = useContext(UserContext)

    return (
        <div>
            <div>
                <h3>Total:</h3>
                <span>R$ {counterSale.reduce((oldValue, newValue) => {
                        return oldValue + newValue.price;
                    }, 0)}
                </span>
            </div>
            <button onClick={() => {return  (setListProductsCart([]), setCounterSale([]))}}>Remover todos</button>
        </div>
    )
}
export default CartTotal