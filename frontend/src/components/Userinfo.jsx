import React from 'react'
import { FileInput } from 'flowbite-react'

const Userinfo = () => {
    return (

        <div className='user-info-body lg:py-10 py-10'>
            <div className='lg:mt-5 mt-25 '>
                <div className='grid lg:grid-cols-2  lg:px-8 px-8  rounded-2xl mx-5 py-5 justify-self-center user-info'>
                    <div className=' content-center text-center lg:w-60 lg:ml-25'>
                        <div className=' '>

                            <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" className='rounded-full justify-self-center' />
                            <span className="block text-md font-bold my-3">Shubham balmiki</span>
                            <span className="block text-sm ">shubhamkumarn880@gmail.com</span>

                        </div>

                    </div>
                    {/* ----------user section one---- */}
                    <div className=' lg:w-70 lg:mt-0 mt-5 lg:mr-20 '>

                        <div className='update-profile-form '>

                          
                                <h1 className='text-center text-2xl font-bold'>Update Profile</h1>

                                <label htmlFor="text" className="block mt-4  lg:text-lg font-medium">Name<span className='text-red-600'>*</span></label>
                                <input type="Name" id="email" placeholder="Enter your Name" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " />


                                <label htmlFor="email" className="block mt-4  lg:text-lg font-medium">Email<span className='text-red-600'>*</span></label>
                                <input type="email" id="email" placeholder="Enter your email" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " />



                                <label htmlFor="email" className="block mt-4 lg:text-lg font-medium">Upload File<span className='text-red-600'>*</span></label>
                                <FileInput id="file-upload" />

                                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 mt-10 float-right cursor-pointer ">Save Details</button>

                    


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Userinfo