import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import searchOff from "../../assets/Vectoroff.png"
import { NoProductsStyle } from "./style"

const NoProducts = () => {

    const {setSearchValue, setWorkingFilter, allsearch} = useContext(UserContext)

    return (
        <NoProductsStyle>
            <div>
                <img src={searchOff} alt="lupa desligada" />
                <h2 className="Heading3">Nenhum resultado para:</h2>
                <p className="Heading3">"{allsearch[0]}"</p>
                <button className="Body-600" onClick={() => {return (setSearchValue(""), setWorkingFilter(false))}}>Limpar pesquisa</button>
            </div>
        </NoProductsStyle>
    )
}

export default NoProducts
