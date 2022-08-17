import { useState } from 'react';
import accordionData from './accordionData';
import { AccordionWrapper } from './AccordionStyled';

const Accordion = () => {

    const [isClicked, setIsClicked] = useState(null);

    const handleIsClicked = (id) => {
        if (isClicked === id) {
            // if previously clicked accordion-item is already open, then close it.
            return setIsClicked(null);
        }

        // and open the currently clicked accordion-item having the id value we passed.
        setIsClicked(id);
    };

    return (
        <>
            <section className="section">
                <AccordionWrapper>
                    {
                        accordionData.map((currValue) => {
                            const { id, title, content } = currValue;
                            return (
                                <div className="accordion_item" key={id}>

                                    {/*===== Accordion-title =====*/}
                                    <div
                                        className={`accordion_title ${isClicked === id ? 'active' : ''}`}
                                        onClick={() => handleIsClicked(id)}
                                    >
                                        <h2>{title}</h2>
                                        <div className="toggle_icon">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>

                                    {/* ===== Accordion-content ===== */}
                                    <div className="accordion_content">
                                        <p>{content}</p>
                                    </div>

                                </div>
                            );
                        })
                    }
                </AccordionWrapper>
            </section>
        </>
    );
};

export default Accordion;