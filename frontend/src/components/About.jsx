import React from 'react'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <div className="about-body py-10">
                <div className="container lg:px-30 px-4 ">
                    <div className="about-section1 mb-3 about-page rounded-xl lg:px-10 ">

                        <div className=" py-5 text-center">
                            <h1 className="text-4xl font-extrabold">WE ARE GYM AND FITNESS</h1>
                            <h2 className="text-2xl mt-2">More than just your average fitness retailer.</h2>
                        </div>


                        <div className="mt-8 px-3">
                            <video autoPlay muted loop playsInline >
                                <source src="/3195943-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="mt-10 px-6">
                            <h1 className="text-3xl font-bold">About Us</h1>
                            <p className="mt-2">
                                Pexels provides high quality and completely free stock photos licensed under the Pexels license. All photos are nicely tagged, <br /> searchable and also easy to discover through our discover pages.
                            </p>
                        </div>

                        <div className="mt-6 px-6">
                            <h1 className="text-3xl font-bold">Photos</h1>
                            <p className="mt-2">
                                We have hundreds of thousands free stock photos and every day new high resolution photos will be added. All photos are hand-picked from photos <br /> uploaded by our users or sourced from free image websites. We make sure all <br /> published pictures are high-quality and licensed under the Pexels license.
                            </p>
                        </div>

                        <div className="mt-6 px-6">
                            <h1 className="text-3xl font-bold">Photo Sources</h1>
                            <p className="mt-2">
                                Only free images from our community of photographers are added to our photo database. We constantly try to deliver as many high quality free stock <br /> photos as possible to the creatives who use our website.
                            </p>
                        </div>

                        <div className="mt-6 px-6">
                            <h1 className="text-3xl font-bold">Team</h1>
                            <p className="mt-2">
                                Pexels is run by Bruno Joseph, Ingo Joseph and Daniel Frese. Bruno and Ingo co-founded Pexels together in 2014 and Daniel joined them in 2015.
                            </p>
                        </div>

                        <div className="mt-6 px-6 py-2">
                            <h1 className="text-3xl font-bold">Mission</h1>
                            <p className="mt-2">
                                We help millions of designers, writers, artists, programmers and other creators to get access to beautiful photos that they can use freely which <br /> empowers them to create amazing products, designs, stories, websites, apps, art and other work. We call it: "Empowering Creators"
                            </p>
                        </div>

                        {/* <div className="mt-6 px-6">
                            <h1 className="text-3xl font-bold">Contribute</h1>
                            <p className="mt-2">Upload your own pictures to support the Pexels community</p>
                            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 cursor-pointer mt-5 cursor-pointer">Start Uploading</button>
                            <p className="mt-3 py-5">
                                And don't forget to share, like and follow Pexels on Instagram, Facebook and X ;
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default About