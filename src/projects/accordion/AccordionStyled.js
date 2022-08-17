import styled from 'styled-components';

export const AccordionWrapper = styled.div`
max-width: 800px;
width: 100%;

    .accordion_item {
        border: 1px solid #333;

        .accordion_title {
            background-color: var(--color-2);
            box-shadow: 0px 4px 8px rgba(0,0,0,0.6);
            padding: 1.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            h2 {
                font-size: 1.2rem;

                @media (max-width: 576px) {
                    font-size: 1rem;
                }
            }

            .toggle_icon {
                width: 15px;
                height: 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;

                span {
                    width: 100%;
                    height: 2px;
                    margin-top: -2px;
                    background-color: var(--color-3);

                    &:first-child {
                        transform: rotate(-90deg);
                        transition: transform 0.3s ease-out;
                    }
                }
            }


            /* when the accordion_title has 'active' class then... */
            &.active {

                .toggle_icon span:first-child {
                    transform: rotate(0deg);
                }

                & + .accordion_content {
                    display: block;
                    animation: fadein 0.5s ease-out;

                    @keyframes fadein {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                }

            }
        }

        .accordion_content {
            display: none;
            padding: 1.25rem;
            line-height: 1.4;
            letter-spacing: 0.6px;
        }
    }
`;