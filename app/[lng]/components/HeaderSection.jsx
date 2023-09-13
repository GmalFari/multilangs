"use client"
import React, { useState,useEffect } from 'react';
import { useTranslation } from '../../i18n';
import CollapsibleList from './CollabsList';
const HeaderSection = ({logo,SocialMedia,langs}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

//   const [t, setT] = useState(null);

//   useEffect(() => {
//     const fetchTranslation = async () => {
//       const { t } = await useTranslation(lng, 'second-page');
//       setT(t);
//     };
//     fetchTranslation();
//   }, [lng]);
//   console.log(t)
//   if (!t) {
//     // Translation is still loading, you can render a loading state or null
//     return (<>Loading....</>)
//   }
//  // Replace with the translation hook from your localization library
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header>
      <nav className="bg-white text-black border-gray-200 px-4 lg:px-6 py-2.5
       ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap
             ">
              {logo}
            </span>
          </a>
          <div className='tex text-black flex justify-center items-center'>
            {SocialMedia.map((social,i)=>{
              return (
                <div key={i} className='mx-4'>
                  {social}
                  </div>
              )
            })}
          </div>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 me-20 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              {/* <CollapsibleList langs={langs}/> */}
            </a>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              search
            </a>
            <div></div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              collabse
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};



export default HeaderSection;