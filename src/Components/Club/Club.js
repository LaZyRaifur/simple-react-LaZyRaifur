import React from 'react';
import './Club.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy,faUsers,faEuroSign,faIdCard } from '@fortawesome/free-solid-svg-icons'

const Club = (props) => {
    const club = props.club;
    const totalBudget = club.reduce((totalBudget, player) =>totalBudget+player.salary, 0)
    // let totalBudget = 0;
    // for(let i = 0; i < club.length; i++) {
    //     const player = club[i];
    //     totalBudget += player.salary;
    // }
    
    return (
        <div className="club-component">
           <h1><FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon> Club details</h1>
           <h4> Total selected players: <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> {club.length}</h4>
           <h4><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> Name: </h4><br />
           {
               club.map((club)=>(<li>{club.name} <br /><h5>salary:</h5> {club.salary}</li>))
           }
           {/* <p>Salary:</p>
           {
               club.map((club)=>(<li><FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon> {club.salary}</li>))
           } */}
           <h4>Total Budget: <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon> {totalBudget}</h4>
        </div>
    );
};

export default Club;