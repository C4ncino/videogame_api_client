import React, { useEffect } from 'react';
import MiniCard from './MiniCard';

const MiniCards = ({videogames, setVideogame, indexP, setIndexP}) => {

    useEffect(() => {
    }, [videogames, indexP]);
    
    return (  
        <>
            <div className='d-flex flex-column gap-2'>
                <div className='p-2'>
                    {videogames.map( (videogame, i) => 
                        <MiniCard key = {videogame.id} videogame = {videogame} setVideogame={setVideogame} i={indexP + i + 1} setIndexP={setIndexP}/>
                    )}
                </div>
            </div>
        </>
    );
}
 
export default MiniCards;