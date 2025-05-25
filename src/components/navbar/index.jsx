import { useState } from "react";

import style from './navbar.module.css'

const Navbar =({onSearch}) => {
    
    const[search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    
    const  handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div className={style.navbarContainer}>
            <div className={style.navbarContainerTitle}>
            <p className={style.navbarTitle}>Mi boletera</p>
            </div>
            <div children className={style.navbarContainerInput}>
                <input 
                    placeholder="Busca tu evento favorito" 
                    onChange={handleInputChange} 
                    onKeyDown = {handleInputKeyDown}
                    value = {search}
                    className={style.navbarInput}
                />
                </div>
        </div>
    );

};

export default Navbar;