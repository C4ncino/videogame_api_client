import React from 'react';
import Card from './Card';

const Cards = ({videogames}) => {
    return (  
        <>
            <div className='d-flex justify-content-evenly gap-3 flex-wrap'>
                {videogames.map( (videogame) => 
                    <Card key = {videogame.id} videogame = {videogame} />
                )}
            </div>
        </>
    );
}
 
export default Cards;