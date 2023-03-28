import React from 'react';

const Card = ({videogame}) => {
    return (  
        <>
            <div className='container-sm m-0 p-0 border border-3 border-primary-subtle rounded' style={{"maxWidth" : "300px"}}>
                <div className='row'>
                    <div className='col'>
                        <img src={videogame.image} alt="IMG" />
                    </div>
                    <div className='col text-start p-3'>
                        <h2 className='p-0 m-0'>{videogame.title}</h2>
                        <h5 className='p-0 m-0'>{videogame.developer}</h5>
                        <h6 className='p-0 m-0'>{videogame.release_year} - {videogame.classification}</h6>
                        <p className='p-0 m-0'>{videogame.description}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex justify-content-end gap-2'>
                        <button className='btn btn-outline-primary'><i></i></button>
                        <button className='btn btn-outline-primary'><i></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Card;