import React from 'react';
import './Banner.module.css';
import topImg from '../../../../assets/top-img.jpg';

const Banner = () => {
    return (
        <div className='container bg-opacity-20'>
            <img className='ring-opacity-30' src={topImg} alt="" />
            <div className='top-quotation banglaFont text-5xl text-yellow-200'>প্রতি বছর এমন একটি জায়গায় <span className='text-6xl text-lime-900'>ভ্রমণ</span> করা উচিৎ যেখানে এর আগে কখনই যাওয়া হয় নি ।</div>
        </div>
    );
};

export default Banner;