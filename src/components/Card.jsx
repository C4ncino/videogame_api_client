import React from 'react';

const Card = ({videogame, setMain}) => {
    return (  
        <>
            <div className='container m-0 p-0' style={{'maxWidth' : '400px', 'maxHeight' : '200px'}}>
                <button className='btn h-100 w-100' onClick={()=>{setMain(false)}}>
                    <div className='row shadow-lg border border-dark border-3 border-opacity-25 rounded m-0 p-0 h-100 w-100'>
                        <div className='col-4 p-0 m-0 h-100'>
                            <div className='container p-0 m-0 w-100 h-100'>
                                <img src={videogame.image} alt='IMG' className='object-fit-cover w-100 h-100 rounded-start-1'/>
                            </div>
                        </div>
                        <div className='col-8 text-start p-1 h-100 border-start border-dark border-2 border-opacity-50'>
                            <div className='row h-100 w-100 m-0 p-0'>
                                <h3 className='col-auto p-0 m-0'>{videogame.title}</h3>
                                {/* <h5 className='col-auto p-0 m-0'>{videogame.developer}</h5>
                                <h6 className='col-auto p-0 m-0'>{videogame.release_year} - {videogame.clasification}</h6> */}
                                <p className='col-auto p-0 m-0 text-wrap'>{videogame.description}</p>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}
 
export default Card;