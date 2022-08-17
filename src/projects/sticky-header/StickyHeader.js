import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './StickyHeaderStyled';
import stickyHeaderData from './stickyHeaderData';
import { Link } from 'react-router-dom';

const StickyHeader = () => {

    const [isSticky, setIsSticky] = useState(false);

    // toggling the Sticky-Header functionality
    useEffect(() => {
        const handleSticky = () => {
            if (window.scrollY >= 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleSticky);

        return () => {
            window.removeEventListener('scroll', handleSticky);
        };
    }, []);


    return (
        <>
            {/*===== Header =====*/}
            <HeaderWrapper className={isSticky ? 'sticked' : ''}>
                <div className="container">
                    <nav>
                        <ul>
                            {
                                stickyHeaderData.map((currValue) => {
                                    const { id, title, path } = currValue;
                                    return (
                                        <li key={id}>
                                            <Link to={path}>
                                                {title}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </HeaderWrapper>

            {/*===== Sections =====*/}
            <main>
                {
                    stickyHeaderData.map((currValue) => {
                        const { id, title } = currValue;
                        return (
                            <section className="section" key={id}>
                                <h1>{title}</h1>
                            </section>
                        );
                    })
                }
            </main>
        </>
    );
};

export default StickyHeader;