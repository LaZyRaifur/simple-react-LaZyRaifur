import React from 'react';
import './Club.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy,faUsers,faEuroSign,faIdCard } from '@fortawesome/free-solid-svg-icons'

const Club = (props) => {
    const club = props.club;
    const totalBudget = club.reduce((sum, player) =>sum+player.salary, 0)
    // let totalBudget = 0;
    // for(let i = 0; i < club.length; i++) {
    //     const player = club[i];
    //     totalBudget += player.salary;
    // }
    
    return (
        <div className="club-component">
           <h1><FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon> Club details</h1>
           <p> Total selected players: <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> {club.length}</p>
           <p><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> Name: {props.name}</p>
           <p>Salary: {club.salary}</p>
           <p>Total Budget: <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon> {totalBudget}</p>
        </div>
    );
};

export default Club;