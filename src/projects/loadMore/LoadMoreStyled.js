import styled from 'styled-components';

export const LoadMoreWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 3rem;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }

    .load_more_card {
        background-color: var(--color-2);
        box-shadow: var(--shadow);
        padding: 2.5rem 3rem;

        h2 {
            margin-bottom: 1rem;
        }
    }

    & + .load_more_btn {
        text-align: center;
        margin-top: 3rem;
        user-select: none;

        button {
            background-color: var(--color-2);
            box-shadow: var(--shadow);
            padding: 1.2rem 2rem;
            font-size: 1.2rem;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.03);
            }

            &[disabled] {
                opacity: 0.5;
                pointer-events: none;
            }
        }
    } 
`;