import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Global from '../Globla';
import axios from 'axios';
export default class DetalleComponent extends Component {

    url=Global.url

    state={
        series:[]
    }
    loadSeriesbyId(){
       var request="/api/Series/"+this.props.idserie;

       axios.get(this.url+request).then(response =>{


        console.log("Leyendo series");
        
        this.setState({
            series:response.data
        })

       })
    }

    componentDidMount=() =>{
        this.loadSeriesbyId()
    }
  render() {
  return (
  
          <>
          
          <NavbarComponent/>
  
  <div className='max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start'>

    <div className="w-full md:w-64 flex-shrink-0">
        <div className="w-full h-96 overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.02] shadow-xl">
            <img
                className='w-full h-full object-cover' 
                src={this.state.series.imagen}
                alt={`Póster de la serie: ${this.state.series.nombre || 'Serie'}`}
            />
        </div>
    </div>
    
 
    <div className='flex flex-col justify-start pt-2'>
   
        <h3 className='text-4xl font-extrabold text-gray-900 leading-tight mb-2'>
            {this.state.series.nombre}
        </h3>
     
        <div className="flex items-center space-x-2 text-2xl font-semibold text-yellow-600 mb-4">
        
            <span className="text-yellow-500">⭐</span> 
            <h2>IMDB: <span className='font-bold'>{this.state.series.puntuacion}</span></h2>
        </div>
       

    <a className='bg-gradient-to-t from-red-400 to-blue-300 m-4 p-3 rounded'  href={`/personaje/${this.state.series.idSerie}`}>Ver Personajes</a>
      
    </div>

</div>
          </>
  
      )
  }
}

