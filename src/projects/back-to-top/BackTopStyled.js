import styled from 'styled-components';

export const BackTopWrapper = styled.div`
position: fixed;
bottom: 3vh;
right: 2vw;
z-index: 99;
background-color: var(--color-5);
color: #fff;
padding: 0.8rem;
border-radius: 50%;
cursor: pointer;
overflow: hidden;
opacity: 0;
visibility: hidden;
transform: translateY(200%);
transition: all 0.3s ease-out;

    &.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    svg {
        width: 25px;
        height: 25px;
        transition: transform 0.2s ease;
    }
    
    &:hover svg {
        transform: translateY(-2px);
    }
`;