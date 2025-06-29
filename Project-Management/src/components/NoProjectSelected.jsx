import React from 'react';
import noProject from '../assets/no-projects.png';
import Buttons from './Buttons.jsx';
export default function NoProjectSelected({onStartNewProject}) {
    return (
        <div className=' mt-24 text-center w-2/3'>
            <img src={noProject} className=' w-16 h-16 object-contain mx-auto'></img>
            <h2 className='text-xl font-bold text-stone-400 mt-4 mb-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a Project or get started with new!</p>
            <p className='mt-8'>
                <Buttons onClick={onStartNewProject}>Create New Project</Buttons>
            </p>
        </div>
    );
}