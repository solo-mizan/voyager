import React from 'react';
import './VideoBanner.css';
import videoBg from '../../../../assets/vidoeBg.mp4'
import boat from '../../../../assets/boat-art.jpg';

const VideoBanner = () => {
    return (
        <div className='video-div'>
            <video src={videoBg} autoPlay loop muted></video>
            <img src={boat} alt="" />
            <div className="content">
                
            </div>
        </div>
    );
};

export default VideoBanner;