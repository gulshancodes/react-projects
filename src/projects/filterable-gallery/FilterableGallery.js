import { useState } from 'react';
import galleryData from './galleryData';
import { GalleryWrapper, FilterList } from './FilterableGalleryStyled';

const FilterableGallery = () => {

    const [galleryItems, setGalleryItems] = useState(galleryData);
    const [isActive, setIsActive] = useState(0);


    // making a unique set of items-category
    const uniqueList = [
        'all',
        ...new Set(
            galleryData.map((currValue) => {
                return currValue.category;
            })
        )
    ];


    // filtering the clicked item
    const filterItem = (category, i) => {

        if (category === 'all') {
            setGalleryItems(galleryData);
            setIsActive(i);
            return;
        }

        const filteredData = galleryData.filter((currValue) => {
            return category === currValue.category;

        });

        setGalleryItems(filteredData);
        setIsActive(i);
    };


    return (
        <>
            <div className="container">
                <FilterList>
                    {
                        uniqueList.map((currValue, index) => {
                            return (
                                <li
                                    key={index}
                                    className={isActive === index ? 'active' : ''}
                                    onClick={() => filterItem(currValue, index)}
                                >
                                    {currValue}
                                </li>
                            );
                        })
                    }
                </FilterList>

                <GalleryWrapper>
                    {
                        galleryItems.map((currValue) => {
                            const { id, img } = currValue;
                            return (
                                <div className='gallery_item' key={id}>
                                    <img src={img} alt='gallery-img' />
                                </div>
                            );
                        })
                    }
                </GalleryWrapper>
            </div>
        </>
    );
};

export default FilterableGallery;
