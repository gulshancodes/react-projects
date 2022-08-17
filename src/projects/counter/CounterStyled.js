import styled from 'styled-components';

export const CounterWrapper = styled.div`
background-color: var(--color-2);
max-width: 800px;
width: 100%;
padding: 5rem;
text-align: center;
border-radius: 20px;
box-shadow: var(--shadow);
user-select: none;
overflow: hidden;

    @media (max-width: 768px) {
        padding: 3rem;
    }

    .counter {
        display: grid;
        grid-template-columns: 0.4fr 1fr 0.4fr;
        gap: 2rem;
        margin-top: 6rem;
        margin-bottom: 5rem;

        @media (max-width: 576px) {
            grid-template-columns: 1fr;
            margin-top: 4rem;
            margin-bottom: 3rem;
        }

        .counter_count,
        .counter_btn {
            background-color: var(--color-1);
            border-radius: 100px;
        }
    
        .counter_count {
            font-size: 3.5rem;
            padding: 0.3rem 0;
        }
    
        .counter_btn {
            font-size: 3rem;
            transition: transform 0.2s ease, opacity 0.2s ease;

            &:active {
                transform: scale(0.9);
            }

            &[disabled] {
                opacity: 0.6;
                pointer-events: none;
            }
        }
    }
    
    .reset_btn {
        background-color: var(--color-3);
        color: #000;
        font-size: 1.4rem;
        padding: 1rem 4rem;
        border-radius: 100px;
        transition: transform 0.3s ease, opacity 0.2s ease;

        @media (max-width: 768px) {
            transform: scale(0.8);
        }
    
        &:hover {
            transform: translateY(-2px);
        }
    
        &:active {
            transform: translateY(0);
        }

        &[disabled] {
            opacity: 0.7;
            pointer-events: none;
        }
    }
`;