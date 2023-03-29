import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Nabvar from './Nabvar';
// import a from './a.json';
import Buttons from './Buttons';

const App = () => {
    const [videogames, setVideogames] = useState([]);
    const [search, setSearch] = useState("");
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const [main, setMain] = useState(true);
    const games_per_page = 20;

    const url = "https://videogame-api-kouw.onrender.com/api/videogames/" + search;

    useEffect(() => {
        axios.get(url).then((response) => {
            setVideogames(response.data);
            console.log(response);
        });
        
        // setVideogames(a);

        if ((parseInt(videogames.length / games_per_page)) >= (videogames.length / games_per_page)) {
            setPages((parseInt(videogames.length / games_per_page) - 1));
        }
        else {
            setPages(parseInt(videogames.length / games_per_page));
        }
    }, [url, videogames.length]);

    return (
        <>
            <Nabvar setSearch={setSearch} search={search}/>

            {main ? (
                <div className='container p-0 ms-25% me-25% text-center'>
                    
                    <div className='container'>
                        <Cards videogames={videogames.slice(games_per_page * (page), (page + 1) * games_per_page)} setMain={setMain}/>
                    </div>

                    <div className='py-5 d-flex gap-3 justify-content-center'>
                        <Buttons pages={pages} page={page} setPage={setPage}/>
                    </div>
                </div>
            ):(
                <button onClick={()=>{setMain(true)}}></button>
            )}
        </>
    );
}
 
export default App;