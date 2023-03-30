import React from 'react';

const Basebar = () => {
  return(
    <div className='base-main'>
    <div className='w-2/4 align-center h-10 base drop-shadow-2xl rounded-lg'>
      <a to="/" className='py-2 inline-block align-middle'>Home</a>
      <a to="/virtual-doctor" className='py-2 inline-block align-middle'>Virtual Doctor</a>
      <a to="/consult-now" className='py-2 inline-block align-middle'>Consult Now</a>
      <a to="/profile" className='py-2 inline-block align-middle'>Profile</a>
    </div>
    </div>
  );
};

export default Basebar;