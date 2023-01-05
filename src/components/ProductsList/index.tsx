import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IProducts } from "../../services/getProducts"
import Product from "../Product"

const ProductsList = () => {

    const {listProducts, productsFiltred, workingFilter} = useContext(UserContext)
    

    return (
        <section>
            {listProducts[0] === undefined ? 
                <h2>loading...</h2> 
                : 
                <>
                {!workingFilter ?
                    <ul>
                        {listProducts.map((el: IProducts)=> <Product infoProduct={el} key={el.id}/>)}
                    </ul>
                :
                    <>
                        {productsFiltred[0] !== undefined ?
                            <ul>
                                {productsFiltred.map((el: IProducts)=> <Product infoProduct={el} key={el.id}/>)}
                            </ul> 
                            :
                            <div><h1>Nenhum produto encontrado</h1></div>
                        }
                    </>
                }
                </>
            }
        </section>
    )
}

export default ProductsList