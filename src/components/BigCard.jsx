import React from 'react';

const BigCard = ({videogame, setMain, setVideogame}) => {
    return (  
        <>
            <div className='text-light'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 className='m-0'>{videogame.title}</h1>

                    <button onClick={()=>{setMain(true); setVideogame();}} className='btn btn-outline-light rounded-circle'> 
                        <i className='bi bi-x p-0 m-0 h-100 w-100' style={{'fontSize': '1.5em'}}></i> 
                    </button>
                </div>

                <h2 className='my-2'>{videogame.developer} - {videogame.release_year}</h2>

                <p className='pe-5'>{videogame.description}</p>

            </div>
        </>
    );
}
 
export default BigCard;