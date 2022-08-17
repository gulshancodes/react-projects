import React from 'react';
import { Button, ModalWrapper } from './ModalStyled';
import img from '../../logo.svg';

const ModalBox = (props) => {

    const { isModalOpen, setIsModalOpen } = props;

    return (
        <>
            <ModalWrapper className={isModalOpen ? 'open' : ''}>
                <div className="modal_centered">
                    <div className="modal_content">
                        <figure className="modal_img">
                            <img src={img} alt="modal-img" />
                        </figure>
                        <p className="modal_txt">This modal is made using ReactJs. ReactJs is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs.</p>
                        <Button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close Modal
                        </Button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

export default ModalBox;