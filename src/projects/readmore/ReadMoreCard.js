import { useState } from 'react';
import { ReadMoreCardWrapper } from './ReadMoreStyled';

const ReadMoreCard = (props) => {

    const { title, desc } = props;

    const [isTruncated, setIsTruncated] = useState(true);

    const handleIsTruncated = () => {
        setIsTruncated(prevState => !prevState);
    };


    return (
        <>
            <ReadMoreCardWrapper>
                <h2>{title}</h2>
                <p>
                    {isTruncated ? desc.slice(0, 70) + '...' : desc}
                </p>
                <button type="button" onClick={handleIsTruncated}>
                    {isTruncated ? 'Read More' : 'Read Less'}
                </button>
            </ReadMoreCardWrapper>
        </>
    );
};

export default ReadMoreCard;