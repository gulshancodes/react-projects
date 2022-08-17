import styled from 'styled-components';

const TabsWrapper = styled.div`
background-color: var(--color-2);
max-width: 800px;
width: 100%;
box-shadow: var(--shadow);
padding: 1.6rem;

    @media (max-width: 576px) {
        padding: 1.2rem;
    }

    .tabs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #333;

        button {
            padding: 1rem 1.8rem;
            transition: all 0.3s ease;

            &[disabled] {
                cursor: not-allowed;
            }

            &.active {
                color: var(--color);
                border-bottom: 1px solid var(--color);
            }

            @media (max-width: 576px) {
                font-size: 0.9rem;
                padding: 0.8rem;
            }

        }
    }

    .tabs_panel {
        padding: 3rem 1rem 2rem;

        @media (max-width: 576px) {
            padding-top: 2rem;
            padding-bottom: 1rem;
        }

        p {
            letter-spacing: 0.6px;
            line-height: 2;
        }
    }
`;

export default TabsWrapper;
