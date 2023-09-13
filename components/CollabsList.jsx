"use client"
import React, { useState } from 'react';

const CollapsibleList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="hidden items-center py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 sm:flex sm:px-3 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-zinc-400"
        type="button"
        id="dropdownMenuButton1"
        aria-expanded={isOpen}
        onClick={toggleList}
      >
        <span className="w-2">
          Language
        </span>
      </button>
      {isOpen && (
        <ul
          className="absolute ms-20
          // z-[1000] bg-blue float-left m-0  min-w-[180px] list-none overflow-hidden 
          // rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg
          //  dark:bg-neutral-700 [&amp;[data-te-dropdown-show]]:block
           "
          
          style={{
            position: 'absolute',
            // inset: '0px auto auto 0px',
            // margin: '0px',
            // transform: 'translate(0px, 42px)',
          }}
          // data-popper-placement="bottom-start"
        >
          <li>
            <a
              className="flex w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="/"
              data-te-dropdown-item-ref=""
            >
            
              Language
            </a>
          </li>
          <li className='px-4 py-2 '>
           English
          </li>
          <li className='px-4 py-2 '>
           Arabic
          </li>
          <li className='px-4 py-2 '>
           Turkish
          </li>
        </ul>
      )}
    </div>
  );
};

export default CollapsibleList;