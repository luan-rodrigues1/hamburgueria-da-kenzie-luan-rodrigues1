import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import logo from "../../assets/logoburguer.png"
import "./style.css"


const Header = () => {

    const {searchProducts, searchValue, setSearchValue} = useContext(UserContext)

    return (
        <header>
            <img src={logo} alt="Logo" />
            <form onSubmit={(event) => {return (event.preventDefault(), searchProducts(searchValue))}} >
                <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Digitar pesquisa"  type="text" />
                <span onClick={() => setSearchValue("")}>X</span>
                <button>Buscar</button>
            </form>
        </header>
    )
}

export default Header