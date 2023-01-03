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
    addProductCart: (id: number) => void
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)


const UserProvider = ({children}:IProfileContextProps) => {

    const [listProducts, setListProducts] = useState<IProducts[] | []>([])
    const [listProductsCart, setListProductsCart] = useState<IProducts[] | []>([])
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

        return setListProductsCart(filtredRemove)
    }

    const addProductCart = (id: number) => {
        console.log("chegou aqui")

        const selectedProduct= listProducts.find((Element) => {
            return Element.id === id;
        });

        const validationCart= listProductsCart.find((Element) => {
            return Element.id === id;
        });

        console.log(selectedProduct)

        console.log(validationCart)
    
        if (!validationCart) {
          return setListProductsCart([...listProductsCart, selectedProduct] as IProducts[])
        }
    
        // const selectedAgain = listProducts.find((element) => {
        //   return element.id === productId;
        // });
    
        setCounterSale([...counterSale, selectedProduct] as IProducts[]);
    };

   return <UserContext.Provider 
    value={{
        listProducts, 
        setListProducts,
        listProductsCart,
        setListProductsCart,
        deleteProductCart,
        addProductCart
    }}>{children}</UserContext.Provider>
}

export default UserProvider