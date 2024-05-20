import React from 'react'
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"
import { Chip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {Pagination} from "@nextui-org/react";
import "./ImportProject.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Skeleton_ui from '@/components/Skeleton_ui';
import Project_crad from '@/components/Project_crad';

const ImportProject = () => {
    return (
        <main className='main_cont bg dark flex flex-col'>
            <div className='flex flex-col border-b-1 border-zinc-700'>
                <div className="navbar w-full flex flex-row justify-between px-12 py-4 pb-2">
                    <div className="logo w-fit gap-4 justify-between flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" width="1.5rem" height="1.5rem" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <g> <path className="st0" d="M484.992,106.555c-42.188-21.672-96.219-40.547-145.484-61.734c-1.609-0.703-2.734-1.188-3.359-1.109 c-22.75-8.75-47.375-13.469-73.016-13.453c-13.047,0-25.375,0.688-37.063,2.016c-27.563,3.141-51.578,10.016-72.219,20.375 C109.93,70.773,63.93,87.586,27.008,106.555C1.086,119.867-1.305,144.742,0.445,155.32c4.688,28.438,24.125,103,28.125,117.844 c3.406,12.672,17.453,22.172,34.406,24.422c9.625,51.516,34.172,96.906,68.703,129.875l0,0 c17.641,16.813,37.906,30.391,60.094,39.766c22.172,9.375,46.281,14.531,71.359,14.516c28.563,0.016,55.859-6.688,80.5-18.672 c36.984-18,68.016-47.797,89.797-84.875c14.859-25.281,25.438-54.016,30.672-84.844c9.75-4.406,17.016-11.563,19.328-20.188 c4-14.844,23.438-89.406,28.125-117.844C513.305,144.742,510.914,119.867,484.992,106.555z M382.742,390.117 c-15.547,17.875-33.938,32.203-54.156,42.031c-20.219,9.844-42.234,15.219-65.453,15.219c-20.375,0-39.844-4.156-57.984-11.813 c-18.125-7.656-34.922-18.844-49.75-32.969h0.016c-4.25-4.031-8.297-8.344-12.188-12.859c0.094,0.094,0.203,0.203,0.313,0.297 c87.156-44.844,163.188-130.953,157.688-228.172c-2.688-47.172-23.656-77.516-48.672-97.031c3.469-0.109,6.969-0.188,10.578-0.188 c23.609,0.016,45.938,4.688,66.219,13.359c8.125,3.469,15.906,7.594,23.328,12.313c6.313,17.219,14.438,40.453,24.5,71.781 c-14.188,90.688,18.406,127.297,51.266,134.578C420.758,332.82,404.602,364.992,382.742,390.117z" /> <path class="st0" d="M266.852,338.086c-25.453,0-46.094,16.781-46.094,37.5s20.641,37.5,46.094,37.5s46.094-16.781,46.094-37.5 S292.305,338.086,266.852,338.086z" /> </g> </g>

                        </svg>
                        <div className='w-2px h-full rotate-35 bg-slate-700'></div>
                        <div className="user_info_container flex flex-row gap-2 items-center">
                            <div className="user_profile w-6 h-6 rounded-full bg-red-500"></div>
                            <div className="username font-light text-sm">sumeet16</div>
                            <Chip size="sm">Hobby</Chip>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <Button isIconOnly color="default" aria-label="notification">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="#ffffff">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                            </svg>
                        </Button>
                        <div className="user_profile w-8 h-8 rounded-full bg-red-500"></div>
                    </div>
                </div>
            </div>

            {/* Start working from here */}
            <div className="body pt-[2rem] w-full flex flex-col items-center">
                <h1>Import Project Page</h1>
            </div>
        </main>
    )
}

export default ImportProject