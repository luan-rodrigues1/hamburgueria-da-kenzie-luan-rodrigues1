import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import logo from "../../assets/logoburguer.png"
import { HeaderStyle } from "./style"


const Header = () => {

    const {searchProducts, searchValue, setSearchValue} = useContext(UserContext)

    return (
        <HeaderStyle>
            <header className="containerAllHeader">
                <nav>
                    <img src={logo} alt="Logo" />
                    <form onSubmit={(event) => {return (event.preventDefault(), searchProducts(searchValue))}} >
                        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Digitar pesquisa"  type="text" />
                        <span className={searchValue !== "" ? "Headline" : "Headline none"} onClick={() => setSearchValue("")}>X</span>
                        <button className="Body-600">Buscar</button>
                    </form>
                </nav>
            </header>
        </HeaderStyle>
    )
}

export default Header