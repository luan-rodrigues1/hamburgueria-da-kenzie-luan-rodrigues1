import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import { IProducts } from "../../services/getProducts";

interface IProfileContextProps {
    children: React.ReactNode;
}

export interface IProfileContext {
    listProducts: IProducts[] 
    setListProducts: React.Dispatch<React.SetStateAction<IProducts[] | []>>
    listProductsCart: IProducts[] 
    setListProductsCart: React.Dispatch<React.SetStateAction<IProducts[] | []>>
    counterSale: IProducts[] 
    setCounterSale: React.Dispatch<React.SetStateAction<IProducts[] | []>>
    deleteProductCart: (id: number) => void
    addProductCart: (id: number) => void
    amountProduct: (id: number) => void
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)


const UserProvider = ({children}:IProfileContextProps) => {

    const [listProducts, setListProducts] = useState<IProducts[]>([])
    const [listProductsCart, setListProductsCart] = useState<IProducts[]>([])
    const [counterSale, setCounterSale] = useState<IProducts[]>([])

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

        return (setListProductsCart(filtredRemove), setCounterSale(filtredRemove))
    }

    const addProductCart = (id: number) => {
        const selectedProduct = listProducts.find((Element) => {
            return Element.id === id;
        });

        const validationCart = listProductsCart.find((Element) => {
            return Element.id === id;
        });

        if (!validationCart) {
          return  (setCounterSale([...counterSale, selectedProduct] as IProducts[]), setListProductsCart([...listProductsCart, selectedProduct] as IProducts[]))
        }
    
        setCounterSale([...counterSale, selectedProduct] as IProducts[]);
    };

    const amountProduct = (id: number) => {
        const amountFiltred = counterSale.filter((Element) => {
          return Element.id === id;
        });
    
        return amountFiltred.length;
    };

   return <UserContext.Provider 
    value={{
        listProducts, 
        setListProducts,
        listProductsCart,
        setListProductsCart,
        deleteProductCart,
        addProductCart,
        amountProduct,
        counterSale,
        setCounterSale
    }}>{children}</UserContext.Provider>
}

export default UserProvider