import { useRef } from 'react';
import Inputs from './Inputs.jsx';
import Modal from './Modal.jsx'
export default function NewProject({ onAdd }) {
    const modalObj = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle === "" || enteredDescription === "" || enteredDueDate === "") {
            modalObj.current.open();
            return;
        }


        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        }
        );
    }

    return (
        <>
            <Modal ref={modalObj}>
                <h2>invalid Data</h2>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button className=' text-stone-800 hover:bg-stone-950'>Cancel</button></li>
                    <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
                </menu>
                <div>
                    <Inputs type="text" ref={title} label='Title' />
                    <Inputs ref={description} label='Description' isTextArea={true} />
                    <Inputs type="date" ref={dueDate} label='Due Date' />
                </div>
            </div>
        </>
    );
}