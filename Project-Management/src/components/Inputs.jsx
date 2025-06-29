import React from 'react';
export default function Inputs({ label, isTextArea, ...probs }) {
    return (
        <p>
            <label>{label}</label>
            {isTextArea ? <textarea {...probs}></textarea> : <input {...probs}></input>}
        </p>


    );
}