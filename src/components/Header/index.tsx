import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


const Header = () => {

    const {searchProducts, searchValue, setSearchValue} = useContext(UserContext)

    return (
        <header>
            <img src="" alt="Logo" />
            <form onSubmit={(event) => {return (event.preventDefault(), searchProducts(searchValue))}} >
                <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Digitar pesquisa"  type="text" />
                <span onClick={() => setSearchValue("")} >X</span>
                <button>Buscar</button>
                <img src="" alt="Lupa de pesquisar" />
            </form>
        </header>
    )
}

export default Header