import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Nabvar from './Nabvar';
import a from './a.json';

const App = () => {
    const [videogames, setVideogames] = useState(a);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(5);

    const url = "https://videogame-api-kouw.onrender.com/api/videogames/";
    
    useEffect(() => {
        axios.get(url).then((response) => {

            console.log(response);
            // setCharacters (response.data.results);
        });
        // console.log(page);
    });

    return (
        <>
        <Nabvar setSearch={setSearch} search={search}/>
        <div className='container p-0 ms-25% me-25% text-center'>
            
            <div className='container'>
                <Cards videogames={videogames}/>
            </div>

            <div className='pt-4 d-flex gap-3 justify-content-center'>
                    {page > 1 ? (
                        <button id='bacwards' onClick={()=>{setPage(page - 1)}} className='btn btn-outline-primary'>
                            Prev
                        </button>
                    ):(
                        <></>
                        )}

                    {page < pages ? (
                        <button id='fowards' onClick={()=>{setPage(page + 1)}} className='btn btn-outline-primary'>
                            Next
                        </button>
                    ):(
                        <></>
                    )}
            </div>
        </div>
        </>
    );
}
 
export default App;