import React from 'react';

const Form = () => {

    const onChange = (e) => {
        if (e.target.name === "search"){
            // setSearch(e.target.value);
        }
    };

    return (  
        <>
            <div className='d-flex flex-column w-100 h-100 justify-content-center text-light mx-auto'>
                <div className="input-group mx-auto input-dark">
                    <input 
                        className="form-control" 
                        type="search" 
                        placeholder="Search" 
                        name = "search" 
                        id = "search"
                        // value = {search}
                        onChange = {onChange} 
                    />
                    
                    <span className="input-group-text" id="basic-addon1">
                        <i className='bi bi-search'></i>
                    </span>
                </div>
            </div>
        </>
    );
}
 
export default Form;