import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent';
import Global from '../Globla';
import axios from 'axios';
export default class CreateComponent extends Component {

    cajanombre=React.createRef();
    cajaimagen=React.createRef();
    selectSerie=React.createRef();
    
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

    createJugador=() =>{
        var request="/api/Personajes";

         let personaje= {
        nombre:this.cajanombre.current.value,
        imagen:this.cajaimagen.current.value,
        idSerie: parseInt(this.selectSerie.current.value)
     }

        axios.post(this.url+request,personaje).then(response =>{
            alert("Insertado correctamente")
        })
    }
    componentDidMount=() =>{
        this.loadSeries()
    }
  render() {
    return (
      <>
      <NavbarComponent></NavbarComponent>

      <div className="max-w-xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Crear  Personaje
                </h2>

                <form  className="space-y-6">
                    
                  
                    <div>
                        <label 
                            htmlFor="nombre" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nombre del Personaje (string)
                        </label>
                        <input
                        ref={this.cajanombre}
                            type="text"
                            name="nombre"
                            id="nombre"
                         
                            required
                            placeholder="Ej: Goku"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="imagen" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            URL de la Imagen (string)
                        </label>
                        <input
                        ref={this.cajaimagen}
                            type="text"
                            name="imagen"
                            id="imagen"
                      
                            required
                            placeholder="https://ejemplo.com/imagen.jpg"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        />
                    </div>

                       <div>

                     
    

    <label htmlFor=""  className="block text-sm font-medium text-gray-700 mb-1">Series</label>
                    <select name="" id="" ref={this.selectSerie}>
                        {this.state.series.map((serie,index)=>{
                            return (
                                <>
                                <option key={index} value={serie.idSerie}> {serie.nombre}</option>
                                
                                </>
                            )
                        })}

                    </select>
                     </div>

                
                    <button
                       onClick={this.createJugador}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 mt-8"
                    >
                        Guardar Personaje
                    </button>

                </form>
            </div>
      </>
    )
  }
}
