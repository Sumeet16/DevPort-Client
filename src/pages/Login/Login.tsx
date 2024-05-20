import React from 'react'
import { Button } from "@/pages/ui/button";
import { Input } from "@/pages/ui/input"
import "./Login.css"

const Login = () => {
  return (
    <>
      <main className='bg dark flex flex-col h-screen'>
        <div className="navbar w-full flex flex-row justify-between px-12 py-5 border-b border-zinc-700">
          <div className="logo w-fit gap-4 justify-between flex items-center w-1/6">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" width="2rem" height="2rem" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff">

              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier"> <g> <path className="st0" d="M484.992,106.555c-42.188-21.672-96.219-40.547-145.484-61.734c-1.609-0.703-2.734-1.188-3.359-1.109 c-22.75-8.75-47.375-13.469-73.016-13.453c-13.047,0-25.375,0.688-37.063,2.016c-27.563,3.141-51.578,10.016-72.219,20.375 C109.93,70.773,63.93,87.586,27.008,106.555C1.086,119.867-1.305,144.742,0.445,155.32c4.688,28.438,24.125,103,28.125,117.844 c3.406,12.672,17.453,22.172,34.406,24.422c9.625,51.516,34.172,96.906,68.703,129.875l0,0 c17.641,16.813,37.906,30.391,60.094,39.766c22.172,9.375,46.281,14.531,71.359,14.516c28.563,0.016,55.859-6.688,80.5-18.672 c36.984-18,68.016-47.797,89.797-84.875c14.859-25.281,25.438-54.016,30.672-84.844c9.75-4.406,17.016-11.563,19.328-20.188 c4-14.844,23.438-89.406,28.125-117.844C513.305,144.742,510.914,119.867,484.992,106.555z M382.742,390.117 c-15.547,17.875-33.938,32.203-54.156,42.031c-20.219,9.844-42.234,15.219-65.453,15.219c-20.375,0-39.844-4.156-57.984-11.813 c-18.125-7.656-34.922-18.844-49.75-32.969h0.016c-4.25-4.031-8.297-8.344-12.188-12.859c0.094,0.094,0.203,0.203,0.313,0.297 c87.156-44.844,163.188-130.953,157.688-228.172c-2.688-47.172-23.656-77.516-48.672-97.031c3.469-0.109,6.969-0.188,10.578-0.188 c23.609,0.016,45.938,4.688,66.219,13.359c8.125,3.469,15.906,7.594,23.328,12.313c6.313,17.219,14.438,40.453,24.5,71.781 c-14.188,90.688,18.406,127.297,51.266,134.578C420.758,332.82,404.602,364.992,382.742,390.117z" /> <path class="st0" d="M266.852,338.086c-25.453,0-46.094,16.781-46.094,37.5s20.641,37.5,46.094,37.5s46.094-16.781,46.094-37.5 S292.305,338.086,266.852,338.086z" /> </g> </g>

            </svg>
            <p className="text-xl">DevPort</p>
          </div>
          {/* <Button className=''>Sign Up</Button> */}
        </div>
        <div className="body w-3/12 font-medium text-center flex flex-col">
          <p className='text-3xl'>Log in to DevPort</p>
          {/* <Input className='mt-6' placeholder='Email' />
          <Button>Log in with email</Button>
          <div className="border-b border-zinc-700"></div> */}
          <div className="github_btn">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5rem" height="1.5rem" viewBox="0 0 20 20" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            <p>Continue with Github</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login