import React, { useEffect, useState } from 'react';
import { LoadMoreWrapper } from './LoadMoreStyled';

const LoadMore = () => {

  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=20')
      .then(resp => resp.json())
      .then(data => setItems(data));
  }, []);


  // Load More functionality
  const loadMoreItems = () => {
    setVisibleItems(prevState => prevState + 3);
  };


  return (
    <>
      <section className="section">
        <div>
          <LoadMoreWrapper>
            {
              items.slice(0, visibleItems).map((currValue) => {
                const { id, body } = currValue;
                return (
                  <div className="load_more_card" key={id}>
                    <h2>{id}</h2>
                    <p>{body}</p>
                  </div>
                );
              })
            }
          </LoadMoreWrapper>

          <div className="load_more_btn">
            <button
              type="button"
              onClick={loadMoreItems}
              disabled={visibleItems > 20}
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadMore;