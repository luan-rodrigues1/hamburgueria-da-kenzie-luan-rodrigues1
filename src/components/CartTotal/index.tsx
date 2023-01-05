import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { toast } from 'react-toastify';

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
            <button onClick={() => {return  (toast.success("Todos os itens removidos"), setListProductsCart([]), setCounterSale([]))}}>Remover todos</button>
        </div>
    )
}
export default CartTotal