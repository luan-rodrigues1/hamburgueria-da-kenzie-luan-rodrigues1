import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { ProductStyle } from "./style"

const Product = ({infoProduct}: any) => {

    const {addProductCart} = useContext(UserContext)

    return (
        <ProductStyle>
            <li>
                <img src={infoProduct.img} alt="" />
                <div>
                    <h2 className="Heading3">{infoProduct.name}</h2>
                    <span className="Caption">{infoProduct.category}</span>
                    <h4 className="Heading4">{infoProduct.price}</h4>
                    <button className="Body-600" onClick={() => addProductCart(infoProduct.id)}>Adicionar</button>
                </div>
            </li>
        </ProductStyle>
    )
}

export default Product