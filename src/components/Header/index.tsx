import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


const Header = () => {

    return (
        <header>
            <img src="" alt="Logo" />
            <form action="" >
                <input placeholder="Digitar pesquisa"  type="text" />
                <button>Pesquisar</button>
            </form>
        </header>
    )
}

export default Header