import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from './BackTopStyled';

const BackTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    // back-to-top visibility toggling
    useEffect(() => {
        const handleIsVisible = () => {
            if (window.scrollY >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleIsVisible);

        return () => {
            window.removeEventListener('scroll', handleIsVisible);
        };
    }, []);


    // back-to-top functionality
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <section className="section">
                <h2>Scroll Down</h2>
            </section>
            <section className="section">
                <h2>Back To Top</h2>
            </section>

            {/*===== Back-to-top =====*/}
            <BackTopWrapper
                title="Back to top"
                className={isVisible ? 'show' : ''}
                onClick={backToTop}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
            </BackTopWrapper>
        </>
    );
};

export default BackTop;