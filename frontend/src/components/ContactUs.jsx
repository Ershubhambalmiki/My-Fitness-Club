import React from 'react';
import Footer from './Footer';

const contactUs = () => {
    return (

        <div className="Contect-body py-5">
            <div className='mb-5'>
                <div className=" px-4 max-w-5xl lg:mx-auto mx-5  contactUs-Form rounded-xl py-5">
                    <div className="flex flex-col lg:flex-row px-3 lg:-px-8 gap-10">


                        {/* Form Section */}
                        <div className="lg:w-200 ">
                        <h2 className="text-2xl font-semibold  ml-5 text-center mb-3 ">Contact Form</h2>
                            <form>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">First Name</label>
                                        <input type="text" placeholder="Enter First Name"
                                            className="w-full border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">Last Name</label>
                                        <input type="text" placeholder="Enter Last Name"
                                            className="w-full border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">Email</label>
                                        <input type="email" placeholder="Enter your Email"
                                            className="w-full border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-1 font-medium">Phone</label>
                                        <input type="text" placeholder="Enter Phone Number"
                                            className="w-full border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Subject</label>
                                    <input type="text" placeholder="Enter your Subject"
                                        className="w-full border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea rows="4" maxLength={300} placeholder="Enter your Message here.."
                                        className="w-full border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                                </div>

                                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 cursor-pointer">Send Message</button>
                            </form>
                        </div>



                        {/* ----------Contact Info Section --------*/}

                        <div className=' text-center hidden sm:block' >
                            <div className='contactus-logo'>

                            <img src="./logo2.png" alt="" className=' w-60 h-20 justify-self-center mb-2' />
                            </div>
                        
 
                            <p className="mb-6 text-gray-600">
                                Fill out the form below, and one of our friendly team members will get back to you shortly
                            </p>

                            <h6 className="text-lg font-medium mb-2">Follow Us on Social Media</h6>
                            <div className="flex gap-4 text-2xl text-gray-600 mb-6 justify-self-center">
                                <i className="fab fa-linkedin hover:text-blue-500 cursor-pointer"></i>
                                <i className="fab fa-instagram hover:text-pink-400 cursor-pointer"></i>
                                <i className="fab fa-twitter hover:text-blue-400 cursor-pointer"></i>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700 mb-3 justify-self-center">
                                <i className="fas fa-envelope"></i>
                                <span>support@fitfusion.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 mb-3 justify-self-center">
                                <i className="fas fa-phone "></i>
                                <span>+91 6348795625</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 justify-self-center">
                                <i className="fas fa-clock"></i>
                                <span>9:00 am - 6:00 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default contactUs;