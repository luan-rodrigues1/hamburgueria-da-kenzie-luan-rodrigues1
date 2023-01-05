import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IProducts } from "../../services/getProducts"
import NoProducts from "../NoProducts"
import Product from "../Product"
import "./style.css"

const ProductsList = () => {

    const {listProducts, productsFiltred, workingFilter} = useContext(UserContext)
    

    return (
        <section>
            {listProducts[0] === undefined ? 
                <div className="loading"></div>
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
                            <NoProducts/>
                        }
                    </>
                }
                </>
            }
        </section>
    )
}

export default ProductsList