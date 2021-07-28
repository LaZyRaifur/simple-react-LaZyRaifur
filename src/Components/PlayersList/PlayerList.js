import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './PlayerList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faEuroSign,faFutbol } from '@fortawesome/free-solid-svg-icons'

const PlayerList = (props) => {
    const { name, img, salary } = props.player;
    return (
       <div className="card">
           
           <img src={img} alt="" />
           
           <div className="container">
               <h4><b><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> {name}</b></h4>
               <p><FontAwesomeIcon icon={faEuroSign }></FontAwesomeIcon>{salary}</p>
               <button className="main-btn btn btn-info" onClick={()=> props.handleAddClub(props.player)}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Add To club</button>
           </div>
       </div>

    );
};

export default PlayerList;