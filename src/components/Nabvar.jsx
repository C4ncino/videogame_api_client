import React from 'react';

const Nabvar = ({setSearch, search}) => {

    
    const onChange = (e) => {
        if (e.target.name === "search"){
            setSearch(e.target.value);
        }
    };

    return (  
        <>
            <nav class="navbar bg-body-tertiary p-5 pt-4">
                <div class="container-fluid">
                    <a href='index.html' class="navbar-brand">
                        <h2>
                            All-Time Videogames
                        </h2>
                    </a>
                    <div class="d-flex">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <i className='bi bi-search'></i>
                            </span>
                        
                            <input 
                                class="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                name = "search" 
                                id = "search"
                                value = {search}
                                onChange = {onChange} 
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Nabvar;