import { ReactNode, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CartProductStyle } from "./style"

const CartProduct = ({infoProduct}: any) => {

    const {deleteProductCart, amountProduct, addProductCart} = useContext(UserContext)
    
    return (
        <CartProductStyle>
            <img src={infoProduct.img} alt="" />
            <div className="boxInfo">
                <h4 className="Heading4">{infoProduct.name}</h4>
                <span className="Caption">{infoProduct.category}</span>
            </div>
            <div className="boxButton">    
                <button onClick={() => deleteProductCart(infoProduct.id)}>-</button>
                <h5 className="Caption">{amountProduct(infoProduct.id) as ReactNode}</h5>
                <button className="buttonAdd" onClick={() => addProductCart(infoProduct.id)}>+</button>
            </div>
        </CartProductStyle>
    )
}

export default CartProduct