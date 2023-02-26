import { useState,useEffect } from "react"
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const lang = import.meta.env.VITE_LANG;
//links 'importantes' importados do .env

const Home = () =>{

    const [topMovies, setTopMovies] = useState([])

    useEffect(()=>{
    // função que é executada toda vez que a pagina home é gerada
        const getTopUrl = `${moviesURL}top_rated?${apiKey}${lang}`
        // gera a url com a moviesUrl + o parametro de top filmes + a api key
        
        getTopRatedMovies(getTopUrl)
        // chama a função getRatedMovies passando a url pela getTopUrl


    }, []
       //expressão em vazio para que não tenha parametro e a função use Effect seja executada com a pagina home
     )


    
    const getTopRatedMovies = async (url) =>{
    // função que só é executada quando recebe a url e gera toda a resposta json

        const res = await fetch(url)
        // pega a url que foi gerada e extrai as infos do link
        const data = await res.json()
        // pega o res como o link e traforma em .json



        setTopMovies(data.results)
        //extrai de todo o objeto json os .result e atualiza eles em topMovies

    }

    return(
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>

            <div className="movies-container">

                {topMovies.length === 0 && <p>Carregando</p>}


                {topMovies.length>0 &&
                 topMovies.map((movie) =><MovieCard key={movie.id} movie={movie} />)}

            </div>

        </div>
    )
}

export default Home