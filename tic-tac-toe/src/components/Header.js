import React from 'react';
import reactImg from '../assets/game-logo.png';
export default function Header(){
 return(
    <>
    <header className="App-header">
        <img src={reactImg} className="App-logo" alt="logo" />
      </header>
    </>
 );
}