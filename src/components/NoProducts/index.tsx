import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import searchOff from "../../assets/Vectoroff.png"

const NoProducts = () => {

    const {searchValue, setSearchValue, setWorkingFilter} = useContext(UserContext)

    return (
        <div>
            <img src={searchOff} alt="lupa desligada" />
            <h2>Nenhum produto encontrado com a palavra "{searchValue}"</h2>
            <button onClick={() => {return (setSearchValue(""), setWorkingFilter(false))}}>Limpe sua pesquisa e tente novamente</button>
        </div>
    )
}

export default NoProducts
