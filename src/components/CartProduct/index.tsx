import { ReactNode, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const CartProduct = ({infoProduct}: any) => {

    const {deleteProductCart, amountProduct, addProductCart} = useContext(UserContext)
    
    return <li>
        <img src={infoProduct.img} alt="" />
        <h2>{infoProduct.name}</h2>
        <span>{infoProduct.category}</span>
        <button onClick={() => deleteProductCart(infoProduct.id)}>-</button>
        <h5>{amountProduct(infoProduct.id) as ReactNode}</h5>
        <button onClick={() => addProductCart(infoProduct.id)}>+</button>
    </li>
}

export default CartProduct