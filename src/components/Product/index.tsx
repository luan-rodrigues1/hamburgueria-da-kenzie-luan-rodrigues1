import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const Product = ({infoProduct}: any) => {

    const {listProductsCart, setListProductsCart} = useContext(UserContext)

    return <li>
        <img src={infoProduct.img} alt="" />
        <div>
            <h2>{infoProduct.name}</h2>
            <span>{infoProduct.category}</span>
            <h4>{infoProduct.price}</h4>
            <button onClick={() => setListProductsCart([...listProductsCart ,infoProduct])}>Adicionar</button>
        </div>
    </li>
}

export default Product