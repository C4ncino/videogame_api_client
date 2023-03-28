import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Nabvar from './Nabvar';
import a from './a.json';
import Buttons from './Buttons';

const App = () => {
    const [videogames, setVideogames] = useState(a);
    const [search, setSearch] = useState("");
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const [main, setMain] = useState(true);

    const url = "https://videogame-api-kouw.onrender.com/api/videogames/" + search;

    useEffect(() => {
        // axios.get(url).then((response) => {
        //     setVideogames(response.data);
        // });
        
        setVideogames(a);

        setPages(parseInt(videogames.length / 18) - 1);
    }, [url, videogames.length]);

    return (
        <>
            <Nabvar setSearch={setSearch} search={search}/>

            {main ? (
                <div className='container p-0 ms-25% me-25% text-center'>
                    
                    <div className='container'>
                        <Cards videogames={videogames.slice(18 * (page), (page + 1) * 18)} setMain={setMain}/>
                    </div>

                    <div className='pt-4 d-flex gap-3 justify-content-center'>
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