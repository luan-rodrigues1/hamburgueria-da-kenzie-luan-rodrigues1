import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import { IProducts } from "../../services/getProducts";

interface IProfileContextProps {
    children: React.ReactNode;
}

export interface IProfileContext {
    listProducts: IProducts[] | []
    setListProducts: React.Dispatch<React.SetStateAction<IProducts[] | []>>
    listProductsCart: IProducts[] | []
    setListProductsCart: React.Dispatch<React.SetStateAction<IProducts[] | []>>
    deleteProductCart: (id: number) => void
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)


const UserProvider = ({children}:IProfileContextProps) => {

    const [listProducts, setListProducts] = useState<IProducts[] | []>([])
    const [listProductsCart, setListProductsCart] = useState<IProducts[] | []>([])
    

    useEffect(() =>  {
        async function getListProducts () {
            try {
                const data = await getProducts()
                setListProducts(data)
            } catch (error) {
                console.error(error)
            }
        }

        getListProducts()
    }, [])

    

    const deleteProductCart = (id: number) => {
        const filtredRemove = listProductsCart.filter(el => el.id !== id)

        return setListProductsCart(filtredRemove)
    } 

   return <UserContext.Provider 
    value={{
        listProducts, 
        setListProducts,
        listProductsCart,
        setListProductsCart,
        deleteProductCart
    }}>{children}</UserContext.Provider>
}

export default UserProvider