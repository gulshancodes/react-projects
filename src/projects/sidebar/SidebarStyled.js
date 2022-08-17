import styled from 'styled-components';

export const SidebarWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 99;
max-width: 300px;
width: 80%;
height: 100%;
background-color: var(--color-2);
box-shadow: 0px 10px 20px -3px #000;
padding: 2rem;
overflow-x: hidden;
overflow-y: auto;
user-select: none;
pointer-events: none;
opacity: 0;
visibility: hidden;
transform: translateX(-100%);
transition: opacity 0.3s ease, visibility 0.2s ease, transform 0.3s ease;

    &.show {
        pointer-events: all;
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
    }
    
    .sidebar_head,
    .sidebar_body,
    .sidebar_foot {
        padding: 2.8rem 0;
    }
    
    .sidebar_body {
        border-top: 1px dashed var(--color-3);
        border-bottom: 1px dashed var(--color-3);

        ul {
            display: grid;
            gap: 1.4rem;

            a {
                opacity: 0.8;

                &:hover {
                    opacity: 1;
                }
            }
        }
    
        .dropdown {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
    
        .dropdown_list {
            list-style-type: disc;
            margin-top: 2rem;
            margin-bottom: 1.5rem;
            padding-left: 1rem;
            font-size: 0.95rem;
        }
    }
`;


export const SidebarToggler = styled.div`
position: fixed;
top: 4vh;
right: 4vw;
z-index: 99;
width: 1.8rem;
height: 1.3rem;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
overflow: hidden;

    span {
        width: 100%;
        height: 2.4px;
        background-color: var(--color-3);
        opacity: 0.875;
        transition: all 0.3s ease;
    }

    &:hover span {
        opacity: 1;
    }


    /* Referring to "SidebarWrapper styled-component" & when they have the 'show' class then their adjacent-sibling (i.e., SidebarToggler) will... */

    ${SidebarWrapper}.show + &  {
        justify-content: center;

        span {
            margin-top: -1.2px;
            margin-bottom: -1.2px;
        }

        span:first-child {
            transform: rotate(45deg);
        }

        span:nth-child(2) {
            opacity: 0;
            transform: translateX(-100%);
        }

        span:last-child {
            transform: rotate(-45deg);
        }
}
`;