import React, { useEffect } from 'react';
import Card from './Card';

const Cards = ({videogames, setMain, setVideogame, setIndexP}) => {

    useEffect(() => {
    }, [videogames]);

    return (  
        <>
            <div className='d-flex justify-content-evenly gap-3 flex-wrap'>
                {videogames.map( (videogame, i) => 
                    <Card key = {videogame.id} videogame = {videogame} setMain={setMain} setVideogame={setVideogame} i={i} setIndexP={setIndexP}/>
                )}
            </div>
        </>
    );
}
 
export default Cards;