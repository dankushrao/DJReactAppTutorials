import { useRef } from 'react';
import Inputs from './Inputs.jsx';
import Modal from './Modal.jsx'
export default function NewProject({ onAdd, onCancel }) {
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
                <h2 className='text-xl font-bold text-stone-900 my-7'>invalid Data</h2>
                <p className=' text-stone-400 mb-4'>Opps..Seems like you forgot the enter values!!</p>
                <p className=' text-stone-400 mb-4'>Make sure you should enter valid value to each field</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button onClick={onCancel} className=' text-stone-800 hover:bg-stone-950'>Cancel</button></li>
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