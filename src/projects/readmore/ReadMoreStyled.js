import styled from 'styled-components';

export const ReadMoreWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2.2rem;

    @media(max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export const ReadMoreCardWrapper = styled.div`
background-color: var(--color-2);
box-shadow: var(--shadow);
padding: 3rem 2.5rem;
text-align: center;
border-radius: 6px;

    p {
        line-height: 1.6;
        margin: 1rem 0 1.6rem;
        letter-spacing: 0.5px;
    }

    button {
        background: var(--color-1);
        padding: 1rem 1.8rem;
        font-size: 1rem;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.4);
        opacity: 0.875;

        &:hover {
            opacity: 1;
        }
    }
`;