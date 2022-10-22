import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loader = () => {

    return (
        <div className="sweet-loading">
                <ClimbingBoxLoader className='mx-auto'
                    color="#36d7b7"
                    size={15}
                ></ClimbingBoxLoader>
        </div>
    );
};

export default Loader;