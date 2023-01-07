import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IProducts } from "../../services/getProducts"
import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import { CartStyle } from "./style"

const Cart = () => {

    const {listProductsCart} = useContext(UserContext)

    return (
        <CartStyle>
            <aside>
                <div className="titleCart">
                    <h2 className="Heading4">Carrinho de compras</h2>
                </div>
                {listProductsCart[0] === undefined ? 
                        <div className="emptyBag">
                            <h3 className="Heading3">Sua sacola está vazia</h3> 
                            <span className="Body-600">Adicione itens</span>
                        </div>
                        :
                        <>
                            <ul>
                            {listProductsCart.map((el: IProducts, index)=>
                            <CartProduct infoProduct={el} key={index}/>)
                            }
                            </ul>
                            <CartTotal/>
                        </> 
                }
            </aside>
        </CartStyle>
    )
}

export default Cart