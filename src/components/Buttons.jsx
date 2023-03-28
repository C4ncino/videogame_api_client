import React from 'react';

const Buttons = ({pages, page, setPage}) => {
    return (  
        <>
            {page > 0 ? (
                <button onClick={()=>{setPage(page - 1)}} className='btn btn-outline-dark'>
                    <i className="bi bi-arrow-left" style={{'fontSize' : '1.5em'}}></i>
                </button>
            ):(
                <></>
            )}

            {page < pages ? (
                <button onClick={()=>{setPage(page + 1)}} className='btn btn-outline-dark'>
                    <i className="bi bi-arrow-right" style={{'fontSize' : '1.5em'}}></i>
                </button>
            ):(
                <></>
            )}
        </>
    );
}
 
export default Buttons;