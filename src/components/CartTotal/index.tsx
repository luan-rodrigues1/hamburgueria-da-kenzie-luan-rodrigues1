import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const CartTotal = () => {

    const {setListProductsCart} = useContext(UserContext)

    return <div>
        <div>
            <h3>Total:</h3>
            <span>R$ 40,00</span>
        </div>
        <button onClick={() => setListProductsCart([])}>Remover todos</button>
    </div>
}
export default CartTotal