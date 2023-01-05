import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IProducts } from "../../services/getProducts"
import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"

const Cart = () => {

    const {listProductsCart} = useContext(UserContext)

    return (
        <aside>
            {listProductsCart[0] === undefined ? 
                    <h2>Sua sacola está vazia</h2> 
                    : 
                    <ul>
                    {listProductsCart.map((el: IProducts, index)=>
                    <CartProduct infoProduct={el} key={index}/>)
                    }
                    </ul>
            }
            <CartTotal/>
        </aside>
    )
}

export default Cart