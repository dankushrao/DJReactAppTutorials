import { forwardRef } from 'react';
const Inputs = forwardRef(function Inputs({ label, isTextArea, ...probs }, ref) {
    const inputStyle = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-900 focus:outline-none  focus:border-stone-600';
    return (
        <p className=' flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
            {isTextArea ?
                (<textarea ref={ref} className={inputStyle} {...probs}></textarea>
                ) : (
                    <input ref={ref} className={inputStyle} {...probs}></input>)}
        </p>
    );

});

export default Inputs;