import React, { useEffect, useState } from 'react';
import playerData from '../../playerData/playerData.json';
import Club from '../Club/Club';
import PlayerList from '../PlayersList/PlayerList';
import './DashBoard.css';

const DashBoard = () => {
    const TotalPlayer = playerData.slice(0,15);
    const[player,setPlayer] = useState(TotalPlayer);
    const [club,setClub] = useState([]);

    //button 
    const handleAddClub = (player) => {
        console.log("added",player);
        const newClub = [...club,player];
        setClub(newClub);
    }
    useEffect(() =>{ 
        // console.log(playerData);
        setPlayer(playerData);
    },[])

    return (
        <div className="player-container">
           <div className="player">
           {
                player.map(player=><PlayerList player={player} handleAddClub={handleAddClub}></PlayerList>)
            }
           </div>
           <div>
                <Club club={club}></Club>
            </div>
        </div>
      
    );
};

export default DashBoard;