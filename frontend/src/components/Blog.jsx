import React from 'react'
import Footer from './Footer';


const About=()=>{
    return(
<div className="main-blog-body">

{/*----------- Hero Section ------------*/}

<div className="w-full bg-[url('https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-f1.png')] py-10 px-4 lg:px-40 lg:py-30">
  <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-7xl mx-auto">
    <div className="lg:w-1/2 text-center lg:text-left">
      <div className="mb-4">
        <h1 className="lg:text-6xl text-5xl font-bold mb-4 text-white lg:leading-20 leading-18">The My Fitness Club Blog</h1>
        <p className="text-white">Stay up to date with posts from gym and studio owners around the world as well as members here at My Fitness Club</p>
      </div>
      <div className="w-24 h-1  bg-red-500 mx-auto lg:mx-0 mt-4"></div>
    </div>
    <div className="lg:w-1/2 backdrop-blur-2xl backdrop-blur-lg bg-[#D4D4D4] p-6 rounded-md ">
      <h2 className="text-2xl font-bold  text-center lg:text-4xl">Subscribe!</h2>
      <label htmlFor="email" className="block mt-4 lg:text-2xl font-medium ">Email*</label>
      <input type="email" id="email" placeholder="Enter your Email" className="mt-2 w-full px-4 py-2 border rounded-md " />
      <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 mt-3  cursor-pointer">Send</button>
    </div>
  </div>
</div>z

{/*----------- Blog Cards Section -----------*/}

<div className="max-w-7xl mx-auto px-4 py-5">
  <div className="flex flex-col lg:flex-row gap-6">
    
    {/*------------ Card 1  ---------------*/}

    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full">
      <img src="https://4238329.fs1.hubspotusercontent-na1.net/hub/4238329/hubfs/IMG_1369.jpeg?width=1920&name=IMG_1369.jpeg" alt="Tech" className="w-full h-56 object-cover" />
      <div className="p-4">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded mb-2">Member Engagement</span>
        <h5 className="text-xl font-bold mb-2">Why First Impressions Matter at Your Gym</h5>
        <p className="text-sm text-gray-600">Discover how a strong first impression can boost member retention, build trust, and set your gym apart. From front desk greetings to facility cleanliness, learn the key elements that shape a new member’s experience</p>
      </div>
      <div className="flex items-center gap-3 p-4 border-t">
        <img src="https://media.gettyimages.com/id/81348767/photo/willie-brown-former-mayor-of-san-francisco.jpg?s=612x612&w=0&k=20&c=oauu2d9ITWpJeb7ddCerGirLSX_cgZl5dkMUVQGcL7o=" alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">jony dev</p>
          <span className="text-xs text-gray-500">1d ago</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500 px-4 pb-4">
        <span>Mar 20, 2025</span>
        <span>|</span>
        <span>30 min read</span>
      </div>
    </div>

    {/*-------------- Card 2 --------------*/}

    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full">
      <img src="https://4238329.fs1.hubspotusercontent-na1.net/hub/4238329/hubfs/Listing%20Image%201280x1000-Feb-06-2025-03-36-48-4804-PM.png?width=1920&name=Listing%20Image%201280x1000-Feb-06-2025-03-36-48-4804-PM.png" alt="Tech" className="w-full h-56 object-cover" />
      <div className="p-4">
        <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded mb-2">Technology</span>
        <h5 className="text-xl font-bold mb-2">What's New In 2022 Tech</h5>
        <p className="text-sm text-gray-600">Boost member engagement by creating a community-driven atmosphere—think personalized challenges, interactive group classes, and regular feedback loops.</p>
      </div>
      <div className="flex items-center gap-3 p-4 border-t">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">Jane Doe</p>
          <span className="text-xs text-gray-500">2h ago</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500 px-4 pb-4">
        <span>Apr 10, 2025</span>
        <span>|</span>
        <span>4 min read</span>
      </div>
    </div>

    {/*------------ Card 3 ----------------*/}

    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full">
      <img src="https://img.freepik.com/premium-photo/woman-with-fitness-equipment-using-laptop-home_128034-1486.jpg?ga=GA1.1.88706443.1744377097&semt=ais_hybrid&w=740" alt="Tech" className="w-full h-56 object-cover" />
      <div className="p-4">
        <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded mb-2">Facility</span>
        <h5 className="text-xl font-bold mb-2">The 5 Most Common Gym Owner Misteks</h5>
        <p className="text-sm text-gray-600">Avoid the pitfalls that hold gyms back. From poor member retention strategies to neglecting marketing, learn the top 5 mistakes gym owners make—and how to fix them.</p>
      </div>
      <div className="flex items-center gap-3 p-4 border-t">
        <img src="https://media.gettyimages.com/id/96346625/photo/croatias-former-prime-minister-ivo-sanader-gestures-as-he-addresses-journalists-at-his-partys.jpg?s=612x612&w=0&k=20&c=khoPK8bZUMj9dplYejx61zE3N5iKlK6bsK8QtrdO0bg=" alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">mikel</p>
          <span className="text-xs text-gray-500">5d ago</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500 px-4 pb-4">
        <span>Mar 20, 2025</span>
        <span>|</span>
        <span>30 min read</span>
      </div>
    </div>

  </div>

  {/*---------------- Load More Button --------------*/}

  <div className="flex justify-center mt-10">
  <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 mt-3 cursor-pointer ">Load more stories</button>
  </div>
</div>
<Footer/>
</div>
    )
}
export default About
    