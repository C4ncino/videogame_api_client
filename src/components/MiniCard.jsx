import React from 'react';

const MiniCard = ({videogame, setVideogame, i, setIndexP}) => {
    
    const onClick = () => {
        setVideogame(videogame);
        setIndexP(i);
        console.log("DSAD");
        console.log(videogame);
        console.log(i);
    }
    
    return (  
        <>
            <div className='m-0 px-0 py-2' style={{'width' : '275px', 'height' : '120px'}}>
                <button className='mini-btn btn h-100 w-100 border border-light border-2 border-opacity-25 rounded p-0 m-0' onClick={onClick}>
                    <div className='d-flex justify-content-center w-100 h-100 p-0 m-0'>
                        <div className='mini-img p-0 m-0 h-100 w-100'>
                            <img src={videogame.image} alt='IMG' className='object-fit-cover w-100 h-100 rounded-start-1'/>
                        </div>
                        <div className='mini-title p-1 m-0 w-100 h-100 w-100 text-light border-start border-light border-2 border-opacity-50 d-flex align-items-center'>
                            <h6>{videogame.title}</h6>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}
 
export default MiniCard;