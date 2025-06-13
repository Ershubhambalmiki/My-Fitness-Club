import React from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
   
    NavbarCollapse,
    NavbarToggle,
} from "flowbite-react";

const NavbarHeader = () => {
    return (
        <div className=' navbar '>
            <Navbar fluid rounded className='bg-[#545454]'>
                <Link to="/">
                    <img src="logo1.png" className="lg:h-14 h-12 " alt="" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
                </Link>
                <div className="flex md:order-2">
                    <Link to="/signin"> <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-1xl px-3 py-2 text-center me-2 cursor-pointer">Sign in</button></Link>
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <DropdownHeader>
                        <Link to="/userinfo">    <span className="block text-sm">Shubham balmiki</span>
                        <span className="block truncate text-sm font-medium">shubhamkumarn880@gmail.com</span></Link>
                        </DropdownHeader>
                        <DropdownDivider />
                       <DropdownItem>Sign Out</DropdownItem>
                    </Dropdown>
                    <NavbarToggle />
                </div>
                <NavbarCollapse >
                    <Link to="/about" className='text-lg text-white' active>About</Link>
                    <Link to="/blog" className='text-lg text-white' active>Blog</Link>
                    <Link to="/contactus" className='text-lg text-white' active>Contact Us</Link>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default NavbarHeader;