import React from 'react';
import Loader from '../../Shared/Loader/Loader';

const Home = () => {
    return (
        <div>
            <p className='banglaFont text-3xl p-5 text-purple-900 text-center font-bold'>আমার সোনার বাংলা আমি তোমায় ভালোবাসি।</p>
            <Loader></Loader>
        </div>
    );
};

export default Home;