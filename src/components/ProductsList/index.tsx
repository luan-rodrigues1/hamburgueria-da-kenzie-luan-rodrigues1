import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IProducts } from "../../services/getProducts"
import Product from "../Product"

const ProductsList = () => {

    const {listProducts, productsFiltred} = useContext(UserContext)
    

    return (
        <section>
            {listProducts[0] === undefined ? 
                <h2>loading...</h2> 
                : 
                <>
                {productsFiltred[0] === undefined ?
                    <ul>
                        {listProducts.map((el: IProducts)=>
                        <Product infoProduct={el} key={el.id}/>)
                        }
                    </ul>
                :
                    <ul>
                        {productsFiltred.map((el: IProducts)=>
                        <Product infoProduct={el} key={el.id}/>)
                        }
                    </ul>
                }
                </>
            }
        </section>
    )
}

export default ProductsList