import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Nabvar from './Nabvar';
import a from './a.json';
import Buttons from './Buttons';
import MiniCards from './MiniCards';
import BigCard from './BigCard';

const App = () => {
    const [videogames, setVideogames] = useState([]);
    const [videogame, setVideogame] = useState();
    const [indexP, setIndexP] = useState();
    const [search, setSearch] = useState("");
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const [main, setMain] = useState(true);
    
    const games_per_page = 20;

    const url = "https://videogame-api-kouw.onrender.com/api/videogames/" + search;

    useEffect(() => {
        axios.get(url).then((response) => {
            setVideogames(response.data);
        });
        
        // setVideogames(a);

        if ((parseInt(videogames.length / games_per_page)) >= (videogames.length / games_per_page)) {
            setPages((parseInt(videogames.length / games_per_page) - 1));
        }
        else {
            setPages(parseInt(videogames.length / games_per_page));
        }

    }, [url, videogames.length]);

    useEffect(() => {
    }, [videogame]);

    return (
        <>
            <div className='w-100 h-100 bg-dark' style={{'minHeight' : '792px'}}>
                {main ? (
                    <>
                        <div className='bg-dark position-fixed top-0 w-100' style={{'height' : '100px'}}>
                            <Nabvar setSearch={setSearch} search={search}/>   
                        </div>
                        <div className='container mx-auto text-center main-container'>
                            <div className='container'>
                                <Cards videogames={videogames.slice(games_per_page * (page), (page + 1) * games_per_page)} setMain={setMain} setVideogame={setVideogame} setIndexP={setIndexP}/>
                            </div>

                            <div className='py-5 d-flex gap-3 justify-content-center'>
                                <Buttons pages={pages} page={page} setPage={setPage}/>
                            </div>
                        </div>
                    </>
                ):(
                    <>
                        <Nabvar setSearch={setSearch} search={search}/>   

                        <div className='d-flex w-100 h-100 flex-column overflow-hidden'>
                            <div className='my-grid'>
                                <div className='banner' style={{'height': '792px', 'width' : '100%'}}>
                                    <img src={videogame.banner} alt='IMG' className='object-fit-cover w-100 h-100'/>
                                </div>
                                <div className='things row p-4 bg-dark bg-gradient bg-opacity-75' style={{'maxHeight' : '600px'}}>
                                    <div className='col-4 d-flex justify-content-center h-100'>
                                        <MiniCards videogames={videogames.slice(indexP + 1, indexP + 5)} setVideogame={setVideogame} indexP={indexP} setIndexP={setIndexP}/>
                                    </div>
                                    <div className='col-8'>
                                        <BigCard videogame={videogame} setMain={setMain} setVideogame={setVideogame}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
 
export default App;