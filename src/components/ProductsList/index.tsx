import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IProducts } from "../../services/getProducts"
import Product from "../Product"

const ProductsList = () => {

    const {listProducts} = useContext(UserContext)
    

    return (
        <section>
            {listProducts[0] === undefined ? 
                <h2>loading...</h2> 
                : 
                <ul>
                {listProducts.map((el: IProducts)=>
                 <Product infoProduct={el} key={el.id}/>)
                }
                </ul>
            }
        </section>
    )
}

export default ProductsList