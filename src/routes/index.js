import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";
import {Login} from '../pages/Login'
import {Cadastro} from '../pages/Cadastro'
import {Consulta} from '../pages/Adm'


export const Rotas = () =>{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>   
          <Route path="/about" element={<About/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/consulta" element={<Consulta/>}/>
          <Route path="/*" element={<NotFound/>}/>  
        </Routes>
      </BrowserRouter> 
    )
}