import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import DetalleComponent from './components/DetalleComponent'
import CreateComponent from './components/CreateComponent';
import PersonajeComponent from './components/PersonajeComponent';
import UpdateComponent from './components/UpdateComponent';

function SeriesElement(){

    let {idserie}=useParams();
    
    return <DetalleComponent idserie={idserie} />
}

function PersonajeElement(){
    let {idpersonaje}=useParams()

    return  <PersonajeComponent idpersonaje={idpersonaje} />
}


export default class Router extends Component {

  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
        <Route path='/serie/:idserie' element={<SeriesElement/>}></Route>
        <Route path='/create' element={<CreateComponent/>}></Route>
        <Route path='/update' element={<UpdateComponent></UpdateComponent>}></Route>
        <Route path='/personaje/:idpersonaje' element={<PersonajeElement/>}></Route>
      </Routes> 
      
      </BrowserRouter>
    )
  }
}
