import React from 'react';
import './VideoBanner.css';
import videoBg from '../../../../assets/vidoeBg.mp4'
import boat from '../../../../assets/boat-art.jpg';

const VideoBanner = () => {
    return (
        <div className='video-div'>
            <div className="overlay">
                <video src={videoBg} autoPlay loop muted></video>
            </div>
            <div className="content">
                <h1 className='text-3xl banglaFont text-sky-900'>চলনবিল নৌকা ভ্রমণ</h1>
            </div>
        </div>
    );
};

export default VideoBanner;