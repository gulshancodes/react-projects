import styled from 'styled-components';

export const HomePage = styled.main`
padding-top: 3rem;
padding-bottom: 2rem;
overflow: hidden;
text-align: center;

    #header {

        h1 {
            letter-spacing: 0.4px;
            margin-bottom: 0.8rem;
            
            span {
                color: var(--color);
            }
        }

        a {
            opacity: 0.8;
            transition: opacity 0.2s ease;

            &:hover {
                opacity: 1;
            }
        }
        
    }

    #footer {

        p {
            text-transform: uppercase;
            letter-spacing: 0.6px;

            a {
                color: var(--color);
                opacity: 0.9;
                transition: opacity 0.2s ease;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
`;

export const HomeWrapper = styled.main`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 3rem;
margin-top: 5rem;
margin-bottom: 6rem;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }

    .card {
        height: 480px;
        border: 1px solid #333;
        overflow: hidden;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
        transition: border-color 0.3s ease;

        &:hover {
            border-color: #666;
        }
    }

    .iframe_wrapper {
        display: block;
        position: relative;
        width: 100%;
        height: 85%;
        overflow: hidden;


        iframe {
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
            pointer-events: none;
        }
    }

    .iframe_title {
        background-color: var(--color-2);
        width: 100%;
        height: 15%;
        display: grid;
        place-items: center;
        border-top: 1px solid #333;
        letter-spacing: 1px;
    }
`;