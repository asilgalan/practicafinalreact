import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Global from '../Globla';
import axios from 'axios';
export default class PersonajeComponent extends Component {

    
    url=Global.url

    state={
        personaje:[]
    }
    loadSeries(){
       var request="/api/Series/PersonajesSerie/"+this.props.idpersonaje;

       axios.get(this.url+request).then(response =>{

        console.log("Leyendo series");
        
        this.setState({
            personaje:response.data
        })

       })
    }

    componentDidMount=() =>{
        this.loadSeries()
    }
  render() {
    return (
<>
 
    <NavbarComponent/>

  
    <div className='container mx-auto p-8'>
    
   
    <div className='P-10 m-20'>
        <a 
            href={`/serie/${this.state.personaje[0]?.idSerie || ''}`} 
            className='inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150'
        >
           
            <svg 
                className="-ml-1 mr-2 h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
            >
                <path fillRule="evenodd" d="M12.793 4.293a1 1 0 010 1.414L9.414 10l3.379 3.379a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            VOLVER
        </a>
    </div>


    <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Nuestros Personajes
    </h2>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        
       
        {this.state.personaje.map((personaje, index) => {
            return (
                <div 
                    key={index} 
                    className='bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                >
                    <div className="h-64 overflow-hidden">
                        <img 
                            className='w-full h-full object-cover' 
                            src={personaje.imagen} 
                            alt={`Imagen de ${personaje.nombre}`} 
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className='text-xl font-semibold text-gray-800 truncate'>
                            {personaje.nombre}
                        </h3>
                    </div>
                </div>
            )
        })}
    </div>
</div>
</>
      




    )
  }
}
