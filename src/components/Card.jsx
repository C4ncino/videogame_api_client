import React from 'react';

const Card = ({videogame, setMain, setVideogame, i, setIndexP}) => {
    
    const onClick = () => {
        setMain(false);
        setVideogame(videogame);
        setIndexP(i);
    }

    return (  
        <>
            <div className='m-0 p-0' style={{'width' : '250px', 'height' : '350px'}}>
                <button className='btn-container btn h-100 w-100 border border-light border-2 border-opacity-25 rounded p-0 m-0' onClick={onClick}>
                    <div className='d-flex flex-column justify-content-start w-100 h-100'>
                        <div className='img-container p-0 m-0 h-100 w-100'>
                            <img src={videogame.image} alt='IMG' className='game-img object-fit-cover w-100 h-100'/>
                        </div>
                        <div className='text-container p-0 m-0 w-100 h-100 border-top border-light border-2 border-opacity-50'>
                            <div className='text-light d-flex flex-column gap-3 justify-content-center align-items-center'>
                                <div className='game-title p-1 py-2 m-0 border-bottom border-light border-2 border-opacity-50 d-flex align-items-center'>
                                    <h3>{videogame.title}</h3>
                                </div>
                                <h6 className='p-0 py-1 m-0'> {videogame.release_year} </h6>
                                <h5 className='p-0 py-2 m-0'>{videogame.developer}</h5> 
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}
 
export default Card;