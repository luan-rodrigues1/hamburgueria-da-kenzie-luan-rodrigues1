import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { toast } from 'react-toastify';
import { CartTotalStyle } from "./style";

const CartTotal = () => {

    const {setListProductsCart, counterSale, setCounterSale} = useContext(UserContext)

    return (
        <CartTotalStyle>
            <div className="boxTotal">
                <div>
                    <h3 className="Heading4">Total:</h3>
                    <span className="Heading4">R$ {counterSale.reduce((oldValue, newValue) => {
                            return oldValue + newValue.price;
                        }, 0)}
                    </span>
                </div>
                <button className="Heading4" onClick={() => {return  (toast.success("Todos os itens removidos"), setListProductsCart([]), setCounterSale([]))}}>Remover todos</button>
            </div>
        </CartTotalStyle>
    )
}
export default CartTotal