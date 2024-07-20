'use client'
import React, { useEffect, useRef, useState } from 'react';
import "./toptags.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const tags = [
    {
        tag: "#Food",
        bg: "food"
    },
    {
        tag: "#Animal",
        bg: "animal"
    },
    {
        tag: "#car",
        bg: "car"
    },
    {
        tag: "#Sport",
        bg: "sport"
    },
    {
        tag: "#Music",
        bg: "music"
    },
    {
        tag: "#Technology",
        bg: "technology"
    },
    {
        tag: "#Abstract",
        bg: "abstract"
    },
    {
        tag: "#Nature",
        bg: "nature"
    },
    {
        tag: "#Nature",
        bg: "nature"
    },
]

const TopTags = () => {
    const tabsBoxRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleIcons = (scrollVal) => {
        const tabsBox = tabsBoxRef.current;
        let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
        leftArrowRef.current.parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
        rightArrowRef.current.parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    }

    useEffect(() => {
        const tabsBox = tabsBoxRef.current;
        const arrowIcons = [leftArrowRef.current, rightArrowRef.current];
        const allTabs = tabsBox.querySelectorAll(".tab");

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
                handleIcons(scrollWidth);
            });
        });

        allTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabsBox.querySelector(".active").classList.remove("active");
                tab.classList.add("active");
            });
        });

        const dragging = (e) => {
            if (!isDragging) return;
            tabsBox.classList.add("dragging");
            tabsBox.scrollLeft -= e.movementX;
            handleIcons(tabsBox.scrollLeft);
        }

        const dragStop = () => {
            setIsDragging(false);
            tabsBox.classList.remove("dragging");
        }

        tabsBox.addEventListener("mousedown", () => setIsDragging(true));
        tabsBox.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

        return () => {
            tabsBox.removeEventListener("mousedown", () => setIsDragging(true));
            tabsBox.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
        }
    }, [isDragging]);

    return (
        ////////////////// mx-40 will be remove after set container
        <div className="wrapper hidden lg:block relative mx-40 p-2 bg-gray-100 rounded-xl overflow-hidden">
            <div className="icon absolute top-0 left-0 h-full w-30 hidden bg-gradient-to-r from-white to-transparent">
                <i ref={leftArrowRef} id="left" className="fa-solid fa-angle-left flex justify-start items-center w-24 h-full cursor-pointer text-center text-black-100 bg-gradient-to-r from-gray-100 via-gray-100 to-white/0 z-50">
                    <div className='pl-4'>
                        <ChevronLeftIcon width={24} />
                    </div>
                </i>
            </div>
            <ul ref={tabsBoxRef} className="tabs-box flex gap-5 list-none overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap">

                {tags.map((data, index) => (
                    <li
                        key={index}
                        className={`tab cursor-pointer text-white overflow-hidden rounded-lg relative flex-shrink-0`}
                    >
                        <div className={`relative flex justify-center items-center w-40 h-12 overflow-hidden`}>
                            <div className={`${data.bg} absolute top-0 left-0 right-0 bottom-0 w-40 blur-[1.5px]`}></div>
                            <p className='relative'>{data.tag}</p>
                        </div>
                    </li>
                ))}

            </ul>
            <div className="icon absolute top-0 right-0 h-full w-30 flex justify-end bg-gradient-to-l from-white to-transparent">
                <i ref={rightArrowRef} id="right" className="fa-solid fa-angle-right flex justify-end items-center w-24 h-full cursor-pointer text-lg text-center text-black-100 bg-gradient-to-l from-gray-100 via-gray-100 to-white/0">
                    <div className='pr-4'>
                        <ChevronRightIcon width={24} />
                    </div>
                </i>
            </div>
        </div>
    );
};

export default TopTags;
