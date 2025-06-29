import React from 'react';
import Inputs from './Inputs';
export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Inputs label='Title' />
                <Inputs label='Description' isTextArea={true} />
                <Inputs label='Due Date' />
            </div>
        </div>
    );
}