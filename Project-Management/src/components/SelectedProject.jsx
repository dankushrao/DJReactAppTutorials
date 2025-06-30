import React from 'react';
export default function SelectedProject({ project }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',
        {
            year: 'numeric',
            month: "short",
            day: 'numeric'
        }
    );
    return(
        <div className=' mt-24 text-center w-2/3'>
            <header>
                <div>
                    <h1>{project.title}</h1>
                    <button>Delete</button>
                </div>
                <p>{formattedDate}</p>
                <p>{project.description}</p>
            </header>
            TASKS
        </div>
    );}