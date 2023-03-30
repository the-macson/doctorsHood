import React from 'react';

const Footer = () => {
  const customeStyle = {
    backgroundColor: "#1EAE98"
  };

  return (
    <footer class="pt-4 pb-2 xl:pt-8" style={customeStyle}>
        <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400">
            <ul class="text-lg text-slate-200 font-light pb-2 flex flex-wrap justify-center">
                &copy; {new Date().getFullYear()} DoctorsHood - Google Solution Challenge
            </ul>
        </div>
    </footer>
  );
};

export default Footer;