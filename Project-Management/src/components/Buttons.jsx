import React from 'react';
export default function Buttons({ children, ...probs }) {
    return (
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200'
            {...probs}
        >
            {children}
        </button>
    );
}