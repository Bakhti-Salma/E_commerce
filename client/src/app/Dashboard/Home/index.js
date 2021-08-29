import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import Popup from "../components/Popup";
const Home = props => {
    return (
        <Fragment>
         
                <div class="mt-16">
                <h3 class="text-gray-600 text-2xl font-medium">Informatique</h3>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover">
                        <img class="flex items-end justify-end h-56 w-full bg-cover" src="https://www.mega.tn/assets/uploads/img/pr_ordinateur_bureau/1616403920_818.jpg" alt=""/>
                            <button class="p-2 rounded-full bg-yellow-600 text-white mx-5 -mb-4 hover:bg-yellow-500 focus:outline-none focus:bg-blue-500">
                            
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">ordinateur de bureau Asus</h3>
                            <span class="text-gray-500 mt-2">2,800.000 DT</span>
                            
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover">
                        
                        <img class="flex items-end justify-end h-56 w-full bg-cover" src="https://www.mega.tn/assets/uploads/img/pr_tablettes_tactiles/94e4f-1.jpg" alt=""/>
                            <button class="p-2 rounded-full bg-yellow-600 text-white mx-5 -mb-4 hover:bg-yellow-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">Tablette lenovo</h3>
                            <span class="text-gray-500 mt-2">300.000 DT</span>
                           
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover">
                        <img class="flex items-end justify-end h-56 w-full bg-cover" src="https://www.mega.tn/assets/uploads/img/pr_ordinateur_portable/1617098902_355.jpg" alt=""/>
                            <button class="p-2 rounded-full bg-yellow-600 text-white mx-5 -mb-4 hover:bg-yellow-500 focus:outline-none focus:bg-blue-500">

                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">Pc portable hp</h3>
                            <span class="text-gray-500 mt-2">1,889.000</span>
                        </div>
                    </div>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover">
                        
                        <img class="flex items-end justify-end h-56 w-full bg-cover" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                            <button class="p-2 rounded-full bg-yellow-600 text-white mx-5 -mb-4 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div class="px-5 py-3">
                        
                            <h3 class="text-gray-700 uppercase">Mac book pro</h3>
                            <span class="text-gray-500 mt-2">7,275.000 DT</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">Add Product</button>
     <Popup trigger={true}>
         <h3>popup</h3>
     </Popup>
     
        </Fragment>
    );
};




export default Home;
