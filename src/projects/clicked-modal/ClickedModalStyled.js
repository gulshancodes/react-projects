import styled from 'styled-components';

export const ClickedModalWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2.4rem;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }

    .modal_card {
        background-color: var(--color-2);
        padding: 3rem 2rem;
        text-align: center;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: var(--shadow);

        img {
            width: 80px;
        }

        h3 {
            font-size: 1.6rem;
            margin-top: 1.5rem;
        }

        p {
            margin: 1rem 0 2rem;
            letter-spacing: 0.5px;
            line-height: 1.5;
        }
    }
`;


export const Button = styled.button`
border: 1px solid #444;
border-radius: 2px;
padding: 0.8rem 2rem;
transition: background-color 0.3s ease, color 0.2s ease;

    &:hover {
        background-color: var(--color-3);
        color: #000;
    }
`;


export const ModalBox = styled.div`
background-color: rgba(0, 0, 0, 0.4);
position: fixed;
top: 0;
left: 0;
z-index: 99;
width: 100%;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
pointer-events: none;
opacity: 0;
visibility: hidden;
transition: opacity 0.3s ease, visibility 0.2s ease;

    &.open {
        pointer-events: all;
        opacity: 1;
        visibility: visible;
    }

    .modalbox_content {
        background: var(--color-2);
        box-shadow: var(--shadow);
        max-width: 600px;
        padding: 3rem;
        text-align: center;
        border-radius: 8px;
        overflow: hidden;
        transform: translateY(-50px);
        transition: transform 0.4s ease;

        @media (max-width: 576px) {
            padding: 2rem;
        }

        h2 {
            font-size: 1.8rem;
            margin-top: 1.2rem;
        }

        p {
            margin: 1rem 0 2.4rem;
            letter-spacing: 0.5px;
            line-height: 1.5;
        }
    }

    /* when the ModalBox has 'open' class then modalbox_content will... */
    &.open .modalbox_content {
        transform: translateY(0);
    }
`;