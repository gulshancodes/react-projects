import styled from "styled-components";

export const SearchField = styled.div`
background-color: var(--color-2);
box-shadow: 8px 8px 15px rgba(0,0,0,0.5);
margin: 2.5rem 0 4rem;
overflow: hidden;

input {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    padding: 1.5rem 2rem;

    @media (max-width: 576px) {
        font-size: 4vw;
        padding: 1.2rem;
    }
}
`;