import { useState } from 'react';
import galleryData from './galleryData';
import { GalleryWrapper, FilterList } from './FilterableGalleryStyled';

const FilterableGallery = () => {

    const [galleryItems, setGalleryItems] = useState(galleryData);


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
    const filterItem = (category) => {

        if (category === 'all') {
            return setGalleryItems(galleryData);
        }

        const filteredData = galleryData.filter((currValue) => {
            return category === currValue.category;

        });

        setGalleryItems(filteredData);
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
                                    onClick={() => filterItem(currValue)}
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