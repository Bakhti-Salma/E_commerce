import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (



<nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-yellow-600  text-xl font-bold md:text-2xl hover:text-yellow-600" href="#">Brand</a>
      </div>
      
    </div>
    <div class="md:flex items-center">
     
    <NavLink
          activeClassName="bg-primary-shade"
          to="/dashboard"
          exact
          className="flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer">
          <i class="fas fa-home text-secondary-tint text-xl"></i>
          <div className="my-1 text-sm text-gray-700 font-medium hover:text-black md:mx-4 md:my-0">Home</div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-shade"
          to="/dashboard/product"
          exact
          className="flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer">
          <i class="fas fa-home text-secondary-tint text-xl"></i>
          <div className="my-1 text-sm text-gray-700 font-medium hover:text-black md:mx-4 md:my-0">Shop</div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-shade"
          to="/dashboard/order"
          exact
          className="flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer">
          <i class="fas fa-home text-secondary-tint text-xl"></i>
          <div className="my-1 text-sm text-gray-700 font-medium hover:text-black md:mx-4 md:my-0">Panier</div>
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NavLink>
        
        
        </div>

    
  </div>

                
            </nav>
          
       
    )
}
export default Sidebar;