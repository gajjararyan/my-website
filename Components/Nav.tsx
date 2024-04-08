import React from 'react'
import Image from '../public/logo bg.png'
import { Bars3Icon } from '@heroicons/react/16/solid';

const Nav = () => {
  return  (
  <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md" >
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
         <h1 className="flex-[0.6] cursor-pointer text-[27px] items-center  text-white font-bold ">
          Stark 
          <span className='text-[#4cc8fe] '> Technologies</span>
          </h1>
          <div className='nav-link'>Home</div>
          <div className='nav-link'>Software Solutions</div>
          <div className='nav-link'>Other Specializations</div>
          <div className='nav-link'>About Us</div>
          <div className='nav-link'>Contact Us</div>
          <div>
            <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#4cc8fe]'/>
          </div>
        </div>
    </div>

  );
};

export default Nav;
