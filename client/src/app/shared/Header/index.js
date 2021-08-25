import React from 'react'

import { Link } from "react-router-dom";
const Header = props => {
    return (
        <header>
        <nav className="flex justify-start items-center gap-8 py-12 px-8">
          <div className="text-2xl text-black font-bold">Itech</div>
          <div className="flex justify-between items-center gap-4 ">
            <div className="capitalize">blog</div>
            <div className="capitalize">pricing</div>
            <div className="capitalize">FAQ</div>
            <div className="capitalize">How It Works</div>
          </div>
        
    
        <div class="relative mt-1 ">
            <input type="text" id="password" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..."></input>
            <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><i class="mdi mdi-magnify"></i></button>
        </div>
    

          <div className="ml-auto flex justify-between items-center gap-4">
          <div className="ml-auto flex justify-between items-center gap-4">
              <Link to="/login">SIGN IN</Link>
              <Link
                to="/register"
                >
                SIGN UP
              </Link>
            </div>
            </div>
          </nav>
          </header>
    )
}


export default Header