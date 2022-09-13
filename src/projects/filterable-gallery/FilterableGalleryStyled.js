import styled from 'styled-components';

export const FilterList = styled.ul`
background-color: var(--color-2);
margin: 2rem 0 3rem;
padding: 1.5rem 1rem;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
row-gap: 0.5rem;
border-radius: 8px;
box-shadow: var(--shadow);

    li {
        padding: 0.7rem 2rem;
        border-radius: 50px;
        font-size: 0.94rem;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.3s ease;
    
        &.active {
            color: var(--color);
        }
    }
`;

export const GalleryWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .gallery_item {
        border-radius: 10px;
        overflow: hidden;
    
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;
