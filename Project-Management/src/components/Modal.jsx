import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Buttons.jsx'
const Modal = forwardRef(function Modal({ children }, ref) {
const dialog = useRef();
    useImperativeHandle(
        ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            }
        });


    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/50 p-4 rounded-md shadow-sm">
            {children}
            <form method='dialog' className='mt-4 text-right'>
                <Button>Okey</Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    );
});

export default Modal;