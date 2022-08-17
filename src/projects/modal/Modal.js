import React, { useState, useEffect } from 'react';
import ModalBox from './ModalBox';
import { Button } from './ModalStyled';

const Modal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    // disable the body-scroll when the Modal is open.
    const docBody = document.body;
    isModalOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');


    // closing the Modal on clicking outside of it.
    useEffect(() => {
        const outsideClose = (e) => {
            if (e.target.className === 'modal_centered') {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('click', outsideClose);

        return () => {
            window.removeEventListener('click', outsideClose);
        };
    }, [isModalOpen]);


    // closing the Modal on pressing the 'Escape' key.
    useEffect(() => {
        const escapeClose = (e) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('keydown', escapeClose);

        return () => {
            window.removeEventListener('keydown', escapeClose);
        };
    }, [isModalOpen]);


    return (
        <>
            <section className="section">
                <Button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                >
                    Open Modal
                </Button>
            </section>


            {/*===== Modal =====*/}
            <ModalBox
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    );
};

export default Modal;