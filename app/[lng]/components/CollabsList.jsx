"use client"
import React, { useState } from 'react';
import { useTranslation } from '../../i18n';

const CollapsibleList = ({langs}) => {
  console.log(langs)
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative ">
      <button
        className="hidden items-center py-2 
         text-neutral-500 hover:text-neutral-700
          focus:text-neutral-700 disabled:text-black/30
           dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 sm:flex sm:px-3 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-zinc-400"
        type="button"
        id="dropdownMenuButton1"
        aria-expanded={isOpen}
        onClick={toggleList}
      >
        <span className="w-2">{langs[0]}</span>
      </button>
      {isOpen && (
        <ul
          className="absolute rounded-xl bg-[#1d2837] ms-20"
          style={{
            position: 'absolute',
            // additional styles
          }}
        >
          <li>
            <a
              className="flex w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="/"
              data-te-dropdown-item-ref=""
            >
              {
              // t('collapsibleList:language')
              }
            </a>
          </li>
          <li className="px-4 py-2">{
            langs[1]
          }</li>
          <li className="px-4 py-2">{
           langs[2]

          }</li>
          <li className="px-4 py-2">{
            langs[3]
          }</li>
        </ul>
      )}
    </div>
  );
};
export default CollapsibleList