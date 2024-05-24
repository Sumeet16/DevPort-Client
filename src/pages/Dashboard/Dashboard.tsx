import React, { useEffect, useState } from 'react'
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"
import { Chip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import "./Dashboard.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Skeleton_ui from '@/components/Skeleton_ui';
import Project_crad from '@/components/Project_crad';

const Dashboard = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser();
        return () => { };
    }, []);

    const getUser = async () => {
        const username = "Ipseeka11";
        const res = await fetch("http://localhost:3000/getUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username
            })
        })

        const result = await res.json();
        setUser(result)
    }

    console.log(user);
    

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

                <div className='mx-7 mb-1 flex flex-row gap-2'>
                    <Button className='text-sm font-normal' color="primary" variant="light">
                        Overview
                    </Button>
                    <Button className='text-sm font-normal' color="primary" variant="light">
                        Domain
                    </Button>
                    <Button className='text-sm font-normal' color="primary" variant="light">
                        Settings
                    </Button>
                </div>
            </div>
            <div className="body pt-[2rem] w-full flex flex-col items-center">
                <div className="search_and_filter_container w-5/6 flex flex-row gap-3">
                    <Input
                        size='lg'
                        type="search"
                        placeholder="Search Repositories and Projects..."
                        labelPlacement="outside"
                        startContent={
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="1.1rem" height="1.1rem" viewBox="0 0 32 32" version="1.1" fill="#000000">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <title>search</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#ffffff"> <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketch:type="MSShapeGroup"> </path> </g> </g> </g>

                            </svg>
                        }
                    />

                    <div className="selecto rounded-md border border-gray-700 flex items-center justify-center p-1">
                        <div className="grid cursor-pointer p-2 mr-2 rounded-lg bg-slate-800">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="1rem" height="1rem" viewBox="0 0 28 28" version="1.1" fill="#000000">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <title>grid</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-102.000000, -933.000000)" fill="#ffffff"> <path d="M128,941 C128,942.104 127.104,943 126,943 L122,943 C120.896,943 120,942.104 120,941 L120,937 C120,935.896 120.896,935 122,935 L126,935 C127.104,935 128,935.896 128,937 L128,941 L128,941 Z M126,933 L122,933 C119.791,933 118,934.791 118,937 L118,941 C118,943.209 119.791,945 122,945 L126,945 C128.209,945 130,943.209 130,941 L130,937 C130,934.791 128.209,933 126,933 L126,933 Z M128,957 C128,958.104 127.104,959 126,959 L122,959 C120.896,959 120,958.104 120,957 L120,953 C120,951.896 120.896,951 122,951 L126,951 C127.104,951 128,951.896 128,953 L128,957 L128,957 Z M126,949 L122,949 C119.791,949 118,950.791 118,953 L118,957 C118,959.209 119.791,961 122,961 L126,961 C128.209,961 130,959.209 130,957 L130,953 C130,950.791 128.209,949 126,949 L126,949 Z M112,941 C112,942.104 111.104,943 110,943 L106,943 C104.896,943 104,942.104 104,941 L104,937 C104,935.896 104.896,935 106,935 L110,935 C111.104,935 112,935.896 112,937 L112,941 L112,941 Z M110,933 L106,933 C103.791,933 102,934.791 102,937 L102,941 C102,943.209 103.791,945 106,945 L110,945 C112.209,945 114,943.209 114,941 L114,937 C114,934.791 112.209,933 110,933 L110,933 Z M112,957 C112,958.104 111.104,959 110,959 L106,959 C104.896,959 104,958.104 104,957 L104,953 C104,951.896 104.896,951 106,951 L110,951 C111.104,951 112,951.896 112,953 L112,957 L112,957 Z M110,949 L106,949 C103.791,949 102,950.791 102,953 L102,957 C102,959.209 103.791,961 106,961 L110,961 C112.209,961 114,959.209 114,957 L114,953 C114,950.791 112.209,949 110,949 L110,949 Z" id="grid" sketch:type="MSShapeGroup"> </path> </g> </g> </g>

                            </svg>
                        </div>
                        <div className="list cursor-pointer p-2 rounded-lg bg-slate-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                            </svg>
                        </div>
                    </div>
                    <div className="add_new_btn text-center"><p>Add New</p></div>
                </div>
                <div className="project_cards">
                    {/* <div className="skeleton_Card flex flex-row flex-wrap gap-5 pt-2 justify-center items-center">
                        <Skeleton_ui />
                        <Skeleton_ui />
                        <Skeleton_ui />
                        <Skeleton_ui />
                        <Skeleton_ui />
                        <Skeleton_ui />
                    </div> */}
                    <div className="project_card_cont flex flex-row flex-wrap gap-5 pt-[4rem] justify-center items-center">
                        <Project_crad />
                        <Project_crad />
                        <Project_crad />
                        <Project_crad />
                        <Project_crad />
                        <Project_crad />
                    </div>
                    <Pagination total={10} initialPage={1} className='mt-5 pagination' />
                </div>
            </div>
        </main>
    )
}

export default Dashboard