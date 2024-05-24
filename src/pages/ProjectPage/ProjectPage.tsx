import React, { useState } from 'react'
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"
import { Chip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import "./ProjectPage.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Skeleton_ui from '@/components/Skeleton_ui';
import Project_crad from '@/components/Project_crad';

const ProjectPage = () => {
  


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
      <div className="project_info_container border-b-1 border-zinc-700 flex flex-row justify-between px-[5%] items-center py-[2.5rem]">
        <p className='text-3xl'>galaxy-three-js</p>
        <div className='mx-7 mb-1 flex flex-row gap-10'>
          <Button className='text-sm font-normal' color="primary" variant="faded" radius='sm'>
            Git Repository
          </Button>
          <Button className='text-sm font-normal' color="primary" variant="faded" radius='sm'>
            Domains
          </Button>
          <Button className='text-sm font-normal' color="primary" variant="solid" radius='sm'>
            Visit
          </Button>
        </div>
      </div>
      <div className="body w-full flex flex-col gap-4 mt-[7rem] p-10 px-[5%]">
        <div>
          <p className='text-2xl font-normal'>Production Deployment</p>
          <p className='text-xs text-gray-500'>The deployment that is avaiable to your vistors.</p>
        </div>

        <div className='h-fit w-fit flex flex-row gap-20 border-[1.5px] border-zinc-700 rounded-md p-6 mt-8'>
          <div className="preview_container w-[40%] border-[1px] border-zinc-700 rounded-md p-4">
            <img alt="Preview Screenshot of galaxy-three-js.vercel.app" src="https://cdn.sanity.io/images/k0dlbavy/production/30f3a89b01f3e8d6f411c037aefcde288f2a9966-1211x631.png" />
          </div>
          <div className="preview_information_container flex flex-col gap-4">
            {/* Deployment Desc */}
            <div className='flex flex-col gap-2'>
              <p className="text-sm text-gray-500">Deployment</p>
              <p className="text-sm">galaxy-three-b7s8fhebf-sumeet16.devport.online</p>
            </div>

            {/* Domain Desc */}
            <div className='flex flex-col gap-2'>
              <p className="text-sm text-gray-500">Domains</p>
              <div className='flex flex-row justify-start items-center gap-2'><p className="text-sm">galaxy-three-js.devport.online</p><svg className="link_externalIcon__uwKVa" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg> <Chip size="sm">+1</Chip></div>
            </div>

            {/* Status and created information */}
            <div className='flex flex-row gap-5'>
              {/* Staus */}
              <div className='flex flex-col gap-2'>
                <p className="text-sm text-gray-500">Status</p>
                <div className='flex flex-row items-center gap-2'>
                  <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
                  <p className="text-sm">Ready</p>
                </div>
              </div>

              {/* Created Information */}
              <div className='flex flex-col gap-2'>
                <p className="text-sm text-gray-500">Created</p>
                <p className="text-sm">75d ago by Sumeet16</p>
              </div>
            </div>

            {/* Source Information */}
            <div className='flex flex-col gap-2'>
              <p className="text-sm text-gray-500">Source</p>
              <div className='flex flex-row items-center gap-2'>
                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 1.75V1H3.25V1.75V9.09451C1.95608 9.42754 1 10.6021 1 12C1 13.6569 2.34315 15 4 15C5.42051 15 6.61042 14.0127 6.921 12.6869C8.37102 12.4872 9.7262 11.8197 10.773 10.773C11.8197 9.7262 12.4872 8.37102 12.6869 6.921C14.0127 6.61042 15 5.42051 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.37069 9.91924 6.52667 11.1749 6.8851C10.9929 7.94904 10.4857 8.9389 9.71231 9.71231C8.9389 10.4857 7.94904 10.9929 6.8851 11.1749C6.59439 10.1565 5.77903 9.35937 4.75 9.09451V1.75ZM13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4ZM4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5Z" fill="currentColor"></path></svg>
                <p className="text-sm">main</p>
              </div>

              <div className='flex flex-row items-center gap-2'>
                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" fill="currentColor"></path></svg>
                <p className="text-sm">76c4fff 25_Realistic_Render_Starter_Pack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectPage