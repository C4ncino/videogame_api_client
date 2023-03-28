import React, { useEffect } from 'react';
import Card from './Card';

const Cards = ({videogames, setMain}) => {

    useEffect(() => {
    }, [videogames]);

    return (  
        <>
            <div className='d-flex justify-content-evenly gap-3 flex-wrap'>
                {videogames.map( (videogame) => 
                    <Card key = {videogame.id} videogame = {videogame} setMain={setMain}/>
                )}
            </div>
        </>
    );
}
 
export default Cards;