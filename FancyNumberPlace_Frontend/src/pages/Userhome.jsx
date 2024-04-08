import React from 'react'
import gov from '../images/gov.png'
import logo from '../images/logo.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'


import '../pages/cssfiles/Userhome.css'

function Userhome() {
    return (
        <>
            <div className="image-contains">
                <img src={gov} alt="" />
            </div>
            <div className="nav">

                <nav class="bg-cyan-500 border-gray-200 ">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src={logo} class="h-8 mr-3 rounded-2xl" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FANCY NUMBER</span>
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div class="hidden w-full md:block md:w-auto bg-cyan-500" id="navbar-default">
                            <ul class="bg-cyan-500 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 bg-cyan-500 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 bg-cyan-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Search No</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 bg-cyan-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 bg-cyan-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pl-3 pr-4 bg-cyan-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <marquee scrollamount="8" behavior="scroll" direction="left" className='bg-blue-700 text-white'>The Applicants will have to create their Login
                through New Public User link for Reserving of Registration Mark of Choice/Fancy Number
            </marquee>
            <br />
            <div className="title align-top text-center text-2xl bg-cyan-500 font-bold">
                <h1>FANCY NUMBER INFOGRAPHICS</h1>
            </div>
            <br /><br /><br /><br />
            <div className="maincon">
                <div className="container">
                    <div className="contents">
                        <h4><b>BUYING OF YOUR FAVORITE REGISTRATIONS NUMBERS MADE EASY</b> </h4>
                        <br /><br />
                        <div class="linking">
                            <div class="img">
                                <img src={image1} alt="icon1" className="imgs" aria-label="Auction Status" />
                                <img src={image2} alt="icon2" className="imgs" />
                            </div>
                            <div class="img">
                                <h5>SEARCH</h5>
                                <h5>REQUEST</h5>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Userhome