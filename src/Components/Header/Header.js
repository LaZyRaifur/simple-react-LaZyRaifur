import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faAppleAlt } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div>
            <h2><FontAwesomeIcon icon={faAppleAlt}></FontAwesomeIcon>  SPORTS CLUB</h2>
            <br />

           <div className="d-flex justify-content-center">
           <div class="input-group mb-3 search-style">
                <input type="text" class="form-control" placeholder="Search player by name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Search</span>
            </div>
           </div>
        </div>
    );
};

export default Header;