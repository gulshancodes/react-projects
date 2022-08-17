import React from 'react';
import { Link } from "react-router-dom";

const HomeCard = (props) => {

    const { title, path } = props;

    return (
        <>
            <div className="card">
                <Link to={path} className="iframe_wrapper">
                    <iframe
                        src={path}
                        title={title}
                        frameBorder="0"
                        scrolling="no">
                    </iframe>
                </Link>

                <h3 className="iframe_title">
                    <Link to={path}>
                        {title}
                    </Link>
                </h3>
            </div>
        </>
    );
};

export default HomeCard;