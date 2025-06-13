
import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='hero-body'>

      {/* ---------Hero-section----------- */}




      <div className='hero-section-bg-img ' >
        < div class="px-4 lg:py-20 py-50 mx-auto ">
          <h1 class="mb-4 text-5xl font-extrabold leading-none text-white lg:mx-20 md:text-5xl lg:text-6xl tracking-wider leading-normal">UNLEASH <br />YOUR <br /><span className='text-red-600 my-2 tracking-wider'> POTENTIAL</span></h1>

        <Link to="/signup"><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg lg:text-2xl text-lg px-5 py-2.5 text-center me-2 mb-2 cursor-pointer lg:ml-20">Sign Up Now</button></Link>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-block'>
          <div className='hidden sm:block'>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/class/f4.jpg" alt="" />
          </div>
          <div className='hidden sm:block'>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/class/f1.jpg" alt="" />

          </div>
          <div className='hidden sm:block'>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/class/f2.jpg" alt="" />
          </div>
          <div className='hidden sm:block'>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/class/f3.jpg" alt="" />
          </div>

        </div>

      </div>

      {/* ------ section one---------------------- */}


      <div className='grid lg:grid-cols-2 lg:mx-20 mx-5 mt-5 lg:mt-10 rounded-2xl hero-section-one'>
        <iframe src="https://www.youtube.com/embed/lvk2PMsuS88?start=92&autoplay=1&mute=1" title="My Fitness Club" class="home-page-yt-video lg:h-5/6 h-full w-full lg:mt-10 mt-5 px-4" allow="autoplay; picture-in-picture">
        </iframe>

        <div className=' py-10 lg:px-5 px-3'>
          <h4 className='text-red-600 lg:text-2xl text-2xl font-bold  '>SCIENCE  2005</h4>
          <span className='font-bold lg:text-3xl text-2xl lg:my-50'>BEST</span> <span className='font-bold lg:text-3xl text-2xl'>EQUIPMENTS</span> <br /><span className='font-bold lg:text-3xl text-2xl'>& FITNESS</span> <span className='font-bold lg:text-3xl text-2xl text-red-600'>TRAINERS</span>
          <p className='mt-3 text-sm '>Gym is very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores eos qui rat ione volupta pleasure rationally encounter consequences that are extremely</p>
          <div className='grid lg:grid-cols-2 grid-cols-2 mt-10  text-sm font-bold'>
            <div className='list'>
              <ul>
                <li>Builds Aerobic Power</li>
                <li>Boots your Memory</li>
              </ul>
            </div>
            <div className='list'>
              <ul>
                <li>Strong body Structure</li>
                <li>Brng about resultful Sleep</li>
              </ul>
            </div>
          </div>
          <div className='lg:mt-20 mt-10'>
            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg lg:text-1xl  px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Lets'start</button>
          </div>

        </div>
      </div>

      {/* ------- section tow---------- */}
      <div className='bg-[#000000] text-white lg:mx-20 mx-5 rounded-2xl'>
        <div className='grid lg:grid-cols-2 mt-5 lg:px-20 lg:py-10 py-5'>
          <div className='flex px-5  lg:mt-0 mb-10'>
            <img className=' lg:mt-4 mt-10 mx-3  lg:h-13 h-10' src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f1.png" alt="" />
            {/* <i class="fa-2xl fa-solid fa-dumbbell m-auto me-3"></i> */}
            <span className=''>gym dumbbells feature neoprene coating, hex shape, vibrant colors, and comfortable grip for versatile strength training</span>
          </div>
          <div className='flex px-5  lg:mt-0 '>
            <img className=' lg:mt-3 mt-8 mx-3  lg:h-15 h-13' src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f2.png" alt="" />
            <span>Gym weightlifting machines offer guided resistance training, enhancing strength, safety, form, and targeting specific muscle groups.</span>
          </div>

        </div>
        <div className='grid lg:grid-cols-2 mt-5 lg:px-20 '>
          <div className='flex px-5  lg:mt-0 mb-10'>
            <img className='lg:mt-3 mt-8 mx-3  lg:h-15 h-12' src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f3.png" alt="" />
            <span>Gym basic skills include posture, breathing, balance, lifting technique, stretching, coordination, endurance, and controlled movement.</span>
          </div>
          <div className='flex px-5  lg:mt-0 mb-10'>
            <img className='lg:mt-7  mt-20 mx-3  lg:h-15 h-12' src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f4.png" alt="" />
            <span>Gym awards serve as powerful tools to recognize achievements, motivate members, and foster a sense of community within fitness environments. They can range from local gym recognitions to prestigious national accolades</span>
          </div>

        </div>


      </div>

      {/* ----------section three-------------- */}

      <div className="section-three cols-1  mt-5 lg:mx-20 mx-5 text-center rounded-2xl py-5 mb-5">
        <h1 className='lg:text-6xl font-bold py-3 text-2xl mx-1'>PROFESSIONAL <span className='text-red-600'>INSTRUCTORS</span></h1>
        <div>
          <p className=''>Gym classes dolor sit amet, consectetur adipiscing elit, sed do eiod tempor</p>
          <p>didunt ut labore et dolore m et dolore magna aliqua minim niam</p>
        </div>


        {/* ----------section for------ */}
        <div className="grid lg:grid-cols-4 mt-5 lg:mx-5 mx-5  gap-5 ">
          <div className='cart bg-[#fff] rounded-2xl '>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/team/1.jpg" alt="" className='card-img-top rounded-2xl rounded-b-none' />
            <div className="card body text-center">
              <h2 className='text-3xl font-bold '>Robert <br /> Cristopher</h2>
              <p className='text-1xl mt-3'>Bodybuilding Trainer</p>
              <div className='flex justify-between py-10 lg:px-10 px-20 text-2xl '>
                <i class="fa-brands fa-facebook fs-5 cart-icon-facebook hover:text-blue-500 cursor-pointer "></i>
                <i class="fa-solid fa-phone fs-5 cart-icon-phone hover:text-green-400 cursor-pointer"></i>
                <i class="fa-brands fa-square-instagram fs-5 cart-icon-instagram hover:text-pink-500 cursor-pointer"></i>
                <i class="fa-brands fa-twitter fs-5 cart-icon-twitter hover:text-sky-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className='cart bg-[#fff] rounded-2xl '>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/team/2.jpg" alt="" className='card-img-top rounded-2xl rounded-b-none' />
            <div className="card body text-center ">
              <h2 className='text-3xl font-bold '>Oliviea <br />  Williams</h2>
              <p className='text-1xl mt-3'>Fitness Trainer</p>
              <div className='flex justify-between py-10 lg:px-10 px-20 text-2xl '>
                <i class="fa-brands fa-facebook fs-5 cart-icon-facebook hover:text-blue-500 cursor-pointer"></i>
                <i class="fa-solid fa-phone fs-5 cart-icon-phone hover:text-green-400 cursor-pointer"></i>
                <i class="fa-brands fa-square-instagram fs-5 cart-icon-instagram hover:text-pink-500 cursor-pointer"></i>
                <i class="fa-brands fa-twitter fs-5 cart-icon-twitter hover:text-sky-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className='cart  bg-[#fff] rounded-2xl '>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/team/3.jpg" alt="" className='card-img-top rounded-2xl rounded-b-none' />
            <div className="card body text-center">
              <h2 className='text-3xl font-bold '>Nikolus <br /> Smith</h2>
              <p className='text-1xl mt-3'> Crossfit Trainer</p>
              <div className='flex justify-between py-10 lg:px-10 px-20 text-2xl '>
                <i class="fa-brands fa-facebook fs-5 cart-icon-facebook hover:text-blue-500 cursor-pointer"></i>
                <i class="fa-solid fa-phone fs-5 cart-icon-phone hover:text-green-400 cursor-pointer"></i>
                <i class="fa-brands fa-square-instagram fs-5 cart-icon-instagram hover:text-pink-500 cursor-pointer"></i>
                <i class="fa-brands fa-twitter fs-5 cart-icon-twitter hover:text-sky-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className='cart bg-[#fff] rounded-2xl '>
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/team/4.jpg" alt="" className='card-img-top rounded-2xl rounded-b-none' />
            <div className="card body text-center ">
              <h2 className='text-3xl font-bold '>Jenifer <br /> Parker</h2>
              <p className='text-1xl mt-3'> Aerobice Instructor</p>
              <div className='flex justify-between py-10 lg:px-10 px-20 text-2xl '>
                <i class="fa-brands fa-facebook fs-5 cart-icon-facebook hover:text-blue-500 cursor-pointer"></i>
                <i class="fa-solid fa-phone fs-5 cart-icon-phone hover:text-green-400 cursor-pointer"></i>
                <i class="fa-brands fa-square-instagram fs-5 cart-icon-instagram hover:text-pink-500 cursor-pointer"></i>
                <i class="fa-brands fa-twitter fs-5 cart-icon-twitter hover:text-sky-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>


  )
}

export default Home;