import { useRef } from 'react';
import Inputs from './Inputs.jsx';
export default function NewProject({ onAdd }) {
    const title = useRef();
    const Description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = Description.current.value;
        const enteredDueDate = dueDate.current.value;
        onAdd({
            title: enteredTitle,
            Description: enteredDescription,
            dueDate: enteredDueDate
        }
        );
    }

    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className=' text-stone-800 hover:bg-stone-950'>Cancel</button></li>
                <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
            </menu>
            <div>
                <Inputs ref={title} label='Title' />
                <Inputs ref={Description} label='Description' isTextArea={true} />
                <Inputs ref={dueDate} label='Due Date' />
            </div>
        </div>
    );
}