import { useState } from 'react';
import React from 'react';

export default function Players({ initialName, Symbol, isActive, onChangeName }) {

    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditing() {
        setEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(Symbol, playerName);
        }
    }
    let playerNameEdited = <span className='player-name'>{playerName}</span>;
    let buttonCaption = "Edit";

    if (isEditing) {
        playerNameEdited = <input type="text" required value={playerName} onChange={handleOnChange} />;
        buttonCaption = "Save";
    }

    function handleOnChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerNameEdited}
                <span className='player-symbol'>{Symbol}</span>
            </span>
            <button onClick={handleEditing} >{buttonCaption}</button>
        </li>
    );
}