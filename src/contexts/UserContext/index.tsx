import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import { IProducts } from "../../services/getProducts";
import { toast } from 'react-toastify';

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
    productsFiltred: IProducts[] 
    setProductsFiltred: React.Dispatch<React.SetStateAction<IProducts[] | []>>
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    workingFilter: boolean
    setWorkingFilter: React.Dispatch<React.SetStateAction<boolean>>
    allsearch: string[]
    deleteProductCart: (id: number) => void
    addProductCart: (id: number) => void
    amountProduct: (id: number) => void
    searchProducts: (search: string) => void
    formatCharacters: (nameProduct: string) => void
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)


const UserProvider = ({children}:IProfileContextProps) => {

    const [listProducts, setListProducts] = useState<IProducts[]>([])
    const [listProductsCart, setListProductsCart] = useState<IProducts[]>([])
    const [counterSale, setCounterSale] = useState<IProducts[]>([])
    const [productsFiltred, setProductsFiltred] = useState<IProducts[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [workingFilter, setWorkingFilter] = useState<boolean>(false)
    const [allsearch, setAllsearch] = useState<string[]>([])

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

    const addProductCart = (id: number) => {
        const selectedProduct = listProducts.find((Element) => {
            return Element.id === id;
        });

        const validationCart = listProductsCart.find((Element) => {
            return Element.id === id;
        });

        
        if (!validationCart) {
            toast.success("Item adicionado ao carrinho")
            return  (setCounterSale([...counterSale, selectedProduct] as IProducts[]), setListProductsCart([...listProductsCart, selectedProduct] as IProducts[]))
        }

        toast.info("Item alterado no carrinho")
        setCounterSale([...counterSale, selectedProduct] as IProducts[]);
    };

    const deleteProductCart = (id: number) => {
        const quantityValidation = counterSale.filter(el => el.id === id)

        const filtredRemove = listProductsCart.filter(el => el.id !== id)

        if(quantityValidation.length === 1){
            toast.success("Item removido do carrinho")
            return (setListProductsCart(filtredRemove), setCounterSale(filtredRemove)) 
        }
        const productDeleted = counterSale.find(el => el.id === id)

        const indexRemove = counterSale.indexOf(productDeleted as IProducts)
        
        const filterRemove = counterSale.filter((el, index) => index !== indexRemove)

        toast.info("Item alterado no carrinho")

        return setCounterSale(filterRemove)
    }

    const amountProduct = (id: number) => {
        const amountFiltred = counterSale.filter((Element) => {
          return Element.id === id;
        });
    
        return amountFiltred.length;
    };

    const searchProducts = (search: string) => {
        setAllsearch([search, ...allsearch])

        if(search.trim() === ""){
            return setWorkingFilter(false)
        }

        const searchFilter= listProducts.filter((element) => {
            return element.name.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
                   element.category.toLowerCase().trim().includes(search.toLowerCase().trim())
        });

        setWorkingFilter(true)

        return setProductsFiltred(searchFilter)
    }

    const formatCharacters = (nameProduct: string) => {
        if(nameProduct.length < 12){
            return nameProduct
        }

        const swapArray = nameProduct.split("")

        const characterFilter = swapArray.filter((el, index) => index < 12)

        return [...characterFilter, "..."]
    }

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
        setCounterSale,
        productsFiltred,
        setProductsFiltred,
        searchProducts,
        searchValue,
        setSearchValue,
        workingFilter,
        setWorkingFilter,
        formatCharacters,
        allsearch
    }}>{children}</UserContext.Provider>
}

export default UserProvider