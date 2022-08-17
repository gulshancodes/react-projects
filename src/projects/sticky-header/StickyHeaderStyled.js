import styled from 'styled-components';

export const HeaderWrapper = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
padding-top: 2rem;
padding-bottom: 2rem;
transition: all 0.3s ease;

    &.sticked {
        background-color: var(--color-2);
        box-shadow: 0px 6px 24px -4px #000;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        text-transform: capitalize;
    }

    & + main {
        section:nth-child(even) {
            background-color: var(--color-2);
        }
    }
`;