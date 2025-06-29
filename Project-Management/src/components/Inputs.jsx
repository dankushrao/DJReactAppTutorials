import React from 'react';
export default function Inputs({ label, isTextArea, ...probs }) {
    const inputStyle = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-200 focus:outline-none  focus:border-stone-600';
    return (
        <p className=' flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
            {isTextArea ? <textarea className={inputStyle} {...probs}></textarea> : <input className={inputStyle} {...probs}></input>}
        </p>


    );
}