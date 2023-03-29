import React from 'react';

const Nabvar = ({setSearch, search}) => {

    
    const onChange = (e) => {
        if (e.target.name === "search"){
            setSearch(e.target.value);
        }
    };

    return (  
        <>
            <nav className="navbar bg-body-tertiary p-5 pt-4 pb-3">
                <div className="container-fluid">
                    <a href='index.html' className="navbar-brand">
                        <h2 className='d-inline-flex gap-3'>
                            All-Time Videogames
                            <i className="bi bi-controller" style={{'fontSize' : '1.25em'}}></i>
                        </h2>
                    </a>
                    <div className="d-flex">
                        <div className="input-group mb-3">
                            <input 
                                className="form-control" 
                                type="search" 
                                placeholder="Search" 
                                name = "search" 
                                id = "search"
                                value = {search}
                                onChange = {onChange} 
                            />
                            
                            <span className="input-group-text" id="basic-addon1">
                                <i className='bi bi-search'></i>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Nabvar;