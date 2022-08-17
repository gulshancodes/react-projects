import React, { useState, useEffect } from 'react';
import ClickedModalBox from './ClickedModalBox';
import clickedModalData from './clickedModalData';
import { ClickedModalWrapper, Button } from './ClickedModalStyled';

const ClickedModal = () => {

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
        <ClickedModalWrapper>
          {
            clickedModalData.map((currValue) => {
              const { id, img, title, desc } = currValue;
              return (
                <div className="modal_card">
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>{desc.slice(0, 40)}...</p>
                  <Button
                    type="button"
                    onClick={() => setIsModalOpen(id)}
                  >
                    Know More
                  </Button>
                </div>
              );
            })
          }
        </ClickedModalWrapper>
      </section>


      {/*===== All the Modals =====*/}
      {
        clickedModalData.map((currValue) => {
          return (
            <ClickedModalBox
              key={currValue.id}
              {...currValue}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          );
        })
      }
    </>
  );
};

export default ClickedModal;