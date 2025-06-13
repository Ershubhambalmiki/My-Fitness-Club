import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
       
            <div className="w-full  bg-[url('https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-f1.png')] text-white px-6 py-10 ">
                <div className="flex flex-col lg:flex-row justify-between gap-10">

                 
                    <div className="lg:w-1/3 space-y-4">
                        <Link to={'/'}>
                            <img className="w-50 h-15 mb-2" src="./logo1.png" alt="Logo" />
                        </Link>
                        <p className="text-sm text-gray-300">
                            My Fitness club winner dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                        <div>
                            <span className="block font-semibold text-white">Opening Time</span>
                            <span className="block text-sm text-gray-300">Monday - Friday: 7 am to 10 pm</span>
                            <span className="block text-sm text-gray-300">Saturday - Sunday: 9 am to 10 pm</span>
                        </div>
                    </div>

               
                    <div className="lg:w-1/3 lg:mt-20">
                        <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
                        <div className="flex">
                            <div className="w-1/2 space-y-2">
                             <Link to="/about">  <p className="text-sm text-gray-300 cursor-pointer hover:text-white space-y-2">About Us</p></Link>
                              <Link to="/membership-form">  <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Membership</p></Link>
                                <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Instructor</p>
                                <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Shop</p>
                                <Link to="/blog"> <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Blog Post</p></Link>
                            </div>
                            <div className="w-1/2 space-y-2">
                                <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Schedules</p>
                                <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Payment</p>
                                <p className="text-sm text-gray-300 cursor-pointer hover:text-white">Contact</p>
                            </div>
                        </div>
                    </div>

                   
                    <div className="lg:w-1/3 space-y-4 lg:mt-20">
                        <h3 className="text-lg font-semibold">CONTACT INFO</h3>
                        <div className="flex items-start gap-3 mt-4">
                            <i className="fa-solid fa-location-dot text-2xl text-white mt-1"></i>
                            <div>
                                <span className="block font-semibold">Address</span>
                                <p className="text-sm text-gray-300">
                                    252B, Central Street Main road Belix Tower,<br />
                                    New York, USA
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-phone text-2xl text-white mt-1"></i>
                            <div>
                                <span className="block font-semibold">Phone</span>
                                <p className="text-sm text-gray-300">
                                    9696637409<br />
                                    7052637409
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

          
                <div className="flex justify-center space-x-6 mt-10">
                    <i className="fa-brands fa-facebook text-xl hover:text-blue-500 cursor-pointer"></i>
                    <i className="fa-solid fa-phone text-xl hover:text-green-400 cursor-pointer"></i>
                    <i className="fa-brands fa-square-instagram text-xl hover:text-pink-500 cursor-pointer"></i>
                    <i className="fa-brands fa-twitter text-xl hover:text-sky-400 cursor-pointer"></i>
                </div>
            </div>
       
    )
}

export default Footer