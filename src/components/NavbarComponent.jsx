import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Globla';
import { NavLink } from 'react-router-dom';
export default class NavbarComponent extends Component {

    url=Global.url

    state={
        series:[]
    }
    loadSeries(){
       var request="/api/Series";

       axios.get(this.url+request).then(response =>{


        console.log("Leyendo series");
        
        this.setState({
            series:response.data
        })

       })
    }

    componentDidMount=() =>{
        this.loadSeries()
    }
  render() {
    return (
        <>
 
<header id="main-header" class="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-lg">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-3">
            <div class="flex items-center">
                <img src="https://placehold.co/40x40/4F46E5/FFFFFF?text=L" alt="Logo" class="w-10 h-10 mr-2 rounded-lg" />
                <h1 class="text-xl font-extrabold text-indigo-400">React</h1>
            </div>

         
            <input type="checkbox" id="mobile-menu-toggle" class="hidden peer" />

    
            <label for="mobile-menu-toggle" class="md:hidden focus:outline-none z-50 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
   
                <svg id="menu-icon" class="w-6 h-6 peer-checked:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              
                <svg id="close-icon" class="w-6 h-6 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </label>

           
            <nav id="main-nav" class="
                fixed inset-y-0 right-0 transform translate-x-full md:relative md:translate-x-0 
                bg-gray-800 md:bg-transparent w-64 md:w-auto h-full md:h-auto overflow-y-auto md:overflow-visible 
                transition-transform duration-300 ease-in-out md:transition-none
                shadow-xl md:shadow-none
                
                /* CLASE CLAVE: Se desliza a 0 cuando el PEER (checkbox) está checked */
                peer-checked:translate-x-0 
            ">
                <ul class="pt-16 md:pt-0 px-4 md:px-0 md:flex space-y-3 md:space-y-0 md:space-x-6 items-center">
                    <li><NavLink to="/" class="block py-2 px-3 rounded-lg md:py-0 hover:text-indigo-400 transition duration-200">Home</NavLink></li>
                    
                 
                    <li class="relative inline-block" id="options-dropdown-container">
                       
                        <input type="checkbox" id="options-toggle" class="hidden peer" />

                       
                        <label for="options-toggle" id="options-dropdown-button" 
                            class="inline-flex items-center w-full justify-center gap-x-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 cursor-pointer">
                            Options
                            <svg id="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1 transform transition-transform duration-200 peer-checked:rotate-180">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                            </svg>
                        </label>

                 
                        <div id="options-dropdown-menu" 
                             class="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 
                                 /* ESTADO OCULTO */
                                 transform transition duration-300 scale-95 opacity-0 pointer-events-none

                                 /* ESTADO VISIBLE (cuando el PEER checkbox está checked) */
                                 peer-checked:scale-100 peer-checked:opacity-100 peer-checked:pointer-events-auto">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-dropdown-button">
                                                {this.state.series.map((serie, index) => (
                                                    <a
                                                    key={index}
                                                    href={`/serie/${serie.idSerie}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition"
                                                    >
                                                    {serie.nombre}
                                                    </a>
                                                ))}
                                                </div>

                        </div>
                    </li>
                  

                    <li><NavLink to="/create" class="block py-2 px-3 rounded-lg md:py-0 hover:text-indigo-400 transition duration-200">Crear Personaje</NavLink></li>
                    <li><NavLink to="/update" class="block py-2 px-3 rounded-lg md:py-0 hover:text-indigo-400 transition duration-200">Modificar Personaje</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
);
        </>
    )
  }
}
