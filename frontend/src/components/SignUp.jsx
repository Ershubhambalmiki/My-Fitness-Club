import { FileInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='signin-body py-10 '>
      <div className='grid lg:grid-cols-2 lg:w-200  lg:px-5 px-8  rounded-2xl mx-5 py-5 justify-self-center signin-form'>
        <div>
          <h1 className='text-xl  text-center'>SignUp</h1>
          <h1 className='text-center text-2xl font-bold'>My Fitness Club</h1>
          <label htmlFor="fullName" className="block mt-4  lg:text-lg font-medium">Full Name<span className='text-red-600'>*</span></label>
          <input type="text" id="text" placeholder="Enter your Full Name" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " />
          <label htmlFor="email" className="block mt-4 lg:text-lg font-medium">Email<span className='text-red-600'>*</span></label>
          <input type="email" id="email" placeholder="Enter your Email" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " />
          <label htmlFor="password" className="block mt-4 lg:text-lg font-medium">Password<span className='text-red-600'>*</span></label>
          <input type="password" id="password" placeholder="Enter your password" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " />
          <label htmlFor="email" className="block mt-4 lg:text-lg font-medium">Confirm Password<span className='text-red-600'>*</span></label>
          <input type="password" id=" conformPassword" placeholder="Enter your confirm password" className="mt-2 bg-gray-200 w-full px-4 py-2  rounded-md " />


          <label htmlFor="email" className="block mt-4 lg:text-lg font-medium">Upload File<span className='text-red-600'>*</span></label>
          <FileInput id="file-upload" />




          <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 mt-10 w-full cursor-pointer ">Submit</button>
          <p className='my-3 text-center'>Already Registered? <Link to="/signin"><span className='text-blue-600 font-bold underline text-sm'>SignIn</span></Link></p>

        </div>

        {/* ----------login section 2---- */}

        <div className='lg:ml-10 hidden sm:block'>
          <div className=' justify-self-center mt-30'>
            <img src="./logo2.png" alt="" className=' login-content-img  w-60 h-20' />
          </div>
          <p className='text-center lg:ml-5 mt-5'>Empowering every body to be strong, confident, and unstoppable  welcome to My Fitness Club</p>
          <p className='lg:mt-10 mt-5 lg:text-center'>Do you have any questions?<Link to="/contactus"><span className='lg:ml-1 font-bold'>contact us</span></Link></p>

        </div>
      </div>

    </div>
  )
}

export default SignUp