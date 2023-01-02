import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const CartProduct = ({infoProduct}: any) => {

    const {deleteProductCart} = useContext(UserContext)
    return <li>
        <img src={infoProduct.img} alt="" />
        <h2>{infoProduct.name}</h2>
        <span>{infoProduct.category}</span>
        <button onClick={() => deleteProductCart(infoProduct.id)}>Remover</button>
    </li>
}

export default CartProduct