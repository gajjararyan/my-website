import Nav from '@/Components/Nav'
// import MobileNav from '@/Components/MobileNav'
// import React, { useState } from 'react'

const Homepage = () => {
  // const [nav, setNav] =  React.useState(false);
  // const OpenNav = () => setNav(true);
  // const CloseNav = () => setNav(false);
  return (
    <div className='overflow-x-hidden'> 
     <div>
      {/* <MobileNav/> */}
      <Nav />
     </div>
  </div>
  );
};
export default Homepage;