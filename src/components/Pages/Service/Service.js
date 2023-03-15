import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdLocalHotel } from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';

const Service = () => {
    return (
        <div>
            <div>
                <h1 className='banglaFont text-center text-3xl lg:text-4xl text-purple-700'>আমাদের সেবাসমূহ</h1>
            </div>
            <div
                className='text-4xl lg:text-5xl m-1 lg:m-2 text-red-500 justify-center flex'
            >{<HiDotsHorizontal></HiDotsHorizontal>}</div>
            <div className='flex items-center justify-center'>
                <p>এখানে কিছু লেখা থাকবে।।এখানে কিছু লেখা থাকবে।।এখানে কিছু লেখা থাকবে।।এখানে কিছু লেখা থাকবে।।এখানে কিছু লেখা থাকবে।।এখানে কিছু লেখা থাকবে।।এখানে কিছু লেখা থাকবে।।</p>
            </div>
            <div>
                <BsFillCircleFill className='text-7xl text-red-400 z-10'><MdLocalHotel className='z-20 text-3xl text-black'></MdLocalHotel></BsFillCircleFill>
                <MdLocalHotel className='z-20 text-3xl text-black'></MdLocalHotel>
            </div>
        </div>
    );
};

export default Service;