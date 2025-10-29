import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import axios from 'axios'
import Global from '../Globla'
export default class UpdateComponent extends Component {

    url=Global.url
     cajanombre=React.createRef();
     selectSerie=React.createRef();

    state={
        series:[],
        personajes:[],
        
      
        
        personajeSeleccionado:{},
        serieSleccionada:{}
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

    loadPersonajes=() =>{
      var request="/api/Personajes";

      axios.get(this.url+request).then(response =>{
        console.log("bien ");

        this.setState({
            personajes:response.data
        })
        
      })
    }


     UpdateJugador=(e) =>{
        e.preventDefault()
        var request="/api/Personajes";

      let personaje= {
        idPersonaje:parseInt(this.state.personajeSeleccionado.idPersonaje),
        nombre:this.state.personajeSeleccionado.nombre,
        imagen:this.state.personajeSeleccionado.imagen,
        idSerie: parseInt(this.state.serieSleccionada.idSerie)
     }

        axios.put(this.url+request,personaje).then(response =>{
            alert("update correctamente")
            console.log("good");
            
        })
    }

    componentDidMount=() =>{
        this.loadSeries()
        this.loadPersonajes();
    }

    loadPersonajesById(){

        var request="/api/Personajes/"+ parseInt(this.cajanombre.current.value);

      axios.get(this.url+request).then(response =>{
        console.log("bien ");

        this.setState({
            personajeSeleccionado:response.data,
          
            
        })
             
               
        
      })

    }
    loadSeriesById(){
      var request="/api/Series/"+this.selectSerie.current.value;
       axios.get(this.url+request).then(response =>{
        
    
        this.setState({
            serieSleccionada:response.data,
          
        })


       })
    }
  render() {
    return (

        <>
             <NavbarComponent></NavbarComponent>
        
     <div className="max-w-xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Editr  Personaje
                </h2>

                <form  className="space-y-6">
                    
              

                

                       <div>

                     
    

    <label htmlFor=""  className="block text-sm font-medium text-gray-700 mb-1">Series</label>
                    <select name="" id="" ref={this.selectSerie} onChange={() =>{
                        this.loadSeriesById()

                    }}>
                        {this.state.series.map((serie,index)=>{
                            return (
                                <>
                                <option key={index} value={serie.idSerie}> {serie.nombre}</option>
                                
                                </>
                            )
                        })}

                    </select>
                     </div>

                    <div>

    <label htmlFor=""  className="block text-sm font-medium text-gray-700 mb-1">Personajes</label>
                    <select name="" id="" ref={this.cajanombre} onChange={() =>{
                        this.loadPersonajesById()
                    }}>
                        {this.state.personajes.map((personaje,index)=>{
                            return (
                                <>
                                <option key={index} value={personaje.idPersonaje}> {personaje.nombre}</option>
                                
                                </>
                            )
                        })}

                    </select>
                     </div>

                
                    <button
                       onClick={this.UpdateJugador}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 mt-8"
                    >
                        Editar Personaje
                    </button>

                </form>
            </div>

<div className='max-w-6xl mx-auto my-10 p-6 bg-gray-50 rounded-xl shadow-2xl'>

    {/* Encabezado General */}
    <h1 className='text-4xl font-extrabold text-center mb-8 text-indigo-700'>
        Detalle de Selección
    </h1>

    {/* Contenedor Flex para Serie y Personaje (Lado a lado) */}
    <div className='flex flex-col lg:flex-row gap-8 justify-center'>

        {/* --- Tarjeta de la Serie Seleccionada --- */}
        <div className='w-full lg:w-1/2 p-6 bg-white rounded-xl shadow-xl border border-gray-200 transition-transform duration-300 hover:shadow-2xl'>
            <h1 className='text-2xl font-bold text-gray-900 border-b pb-2 mb-4'>
                📺 Serie
            </h1>
            
            <h2 className='text-xl font-semibold text-indigo-600 mb-4'>
                {this.state.serieSleccionada.nombre}
            </h2>
            
            <div className='h-72 overflow-hidden rounded-lg shadow-md'>
                <img 
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' 
                    src={this.state.serieSleccionada.imagen} 
                    alt={`Póster de ${this.state.serieSleccionada.nombre}`} 
                />
            </div>
        </div>

        {/* --- Tarjeta del Personaje Seleccionado --- */}
        <div className='w-full lg:w-1/2 p-6 bg-white rounded-xl shadow-xl border border-gray-200 transition-transform duration-300 hover:shadow-2xl'>
            <h1 className='text-2xl font-bold text-gray-900 border-b pb-2 mb-4'>
                🦸 Personaje
            </h1>
            
            <h2 className='text-xl font-semibold text-indigo-600 mb-4'>
                {this.state.personajeSeleccionado.nombre}
            </h2>
            
            <div className='h-72 overflow-hidden rounded-lg shadow-md'>
                <img 
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' 
                    src={this.state.personajeSeleccionado.imagen} 
                    alt={`Imagen de ${this.state.personajeSeleccionado.nombre}`} 
                />
            </div>
        </div>
    </div>
</div>
        </>


    )
  }
}
