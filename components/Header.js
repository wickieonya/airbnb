import React, {Component} from 'react';
import Image from "next/image";
import {
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    GlobeAltIcon,
} from "@heroicons/react/solid";

class Header extends Component {
    render() {
        return (
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
                {/*Left */}
                <div className="relative flex items-center h-10 cursor-pointer my-auto">
                    <Image
                        alt="Logo image"
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>
                {/*Middle - search section */}
                <div className='flex items-center border md:border-2 rounded-full py-2 px-1 md:shadow-sm space-x-1'>
                    <input
                        className='flex-grow pl-5 transparent outline-white'
                        type="text"
                        placeholder="start your search"/>
                    <SearchIcon
                        className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer lg:mx-2"/>
                </div>
                {/*Right */}
                <div className='flex items-center justify-end space-x-4'>
                    <p className='hidden md:inline cursor-pointer'>Become a host</p>
                    <GlobeAltIcon className="h-6 cursor-pointer"/>
                    <div className='flex space-x-2 border-2 rounded-full p-2'>
                        <MenuIcon className="h-6 cursor-pointer"/>
                        <UserCircleIcon className="h-6 cursor-pointer"/>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
