import ReadMoreCard from './ReadMoreCard';
import readMoreData from './readMoreData';
import { ReadMoreWrapper } from './ReadMoreStyled';

const ReadMore = () => {
    return (
        <>
            <section className="section">
                <ReadMoreWrapper>
                    {
                        readMoreData.map((currValue) => {
                            return (
                                <ReadMoreCard
                                    key={currValue.id}
                                    {...currValue}
                                />
                            );
                        })
                    }
                </ReadMoreWrapper>
            </section>
        </>
    );
};

export default ReadMore;