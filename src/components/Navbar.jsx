import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import "./Navbar.css"

const Navbar = () => {

    const [search, setSearch]= useState("")
    //cria a variavel search e o metodo setSearch

    const navigate = useNavigate();
    // função do react dom para direcionar para outras lane pages

    const handleSubmit = (e) => {
       //funcão é executada e recebe o evento    

       e.preventDefault()
       // função que não deixa a pagina ter um preload

       if(!search) return
       // verifica se search é vazio ou undefined 

       navigate(`search?q=${search}`)
       //faz o caminho para a page Search com o valor da pesquisa

       setSearch("")
       //esvazia nossa variavel search logo depois

    }


    return(
        <nav id="navbar">
         <h2>
           <Link to="/"><BiCameraMovie  /> Movie Revi</Link>
         </h2>
            <form onSubmit={handleSubmit
            //executa a função handleSubmit quando é enviado o form
        }>
            
                <input type="text" placeholder="Buscar" 
                onChange={(e)=> setSearch(e.target.value)
                // a cada evento de click atualiza o setSearch para o valor que esta sendo preenchido

                }
                value={search}
                // seta o value do input como search

                />
                <button type="submit">
                    <BiSearchAlt2 className="Search" />
                </button>
            </form>
        </nav>
    )
}

export default Navbar