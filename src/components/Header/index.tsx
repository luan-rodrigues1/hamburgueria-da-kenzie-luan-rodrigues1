import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


const Header = () => {

    const {searchProducts} = useContext(UserContext)

    return (
        <header>
            <img src="" alt="Logo" />
            <form action="" >
                <input onChange={(event) => searchProducts(event.target.value)} placeholder="Digitar pesquisa"  type="text" />
                <img src="" alt="Lupa de pesquisar" />
            </form>
        </header>
    )
}

export default Header