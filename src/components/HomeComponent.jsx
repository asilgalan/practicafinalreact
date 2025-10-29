import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Global from '../Globla'
import axios from 'axios'
export default class HomeComponent extends Component {
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
        
        <NavbarComponent/>


       <div className='flex flex-wrap gap-4 p-4 border rounded-lg shadow-md bg-gray-50'>
    {this.state.series.map((series, index) => {
        return (
           
            <div key={index} className="w-24 h-36 overflow-hidden rounded-md transition-transform duration-300 hover:scale-105 shadow-lg">
                <img
                    className='w-full h-full object-cover' 
                    src={series.imagen}
                   
                />
            </div>
        )
    })}
</div>
                      
        </>

    )
  }
}

