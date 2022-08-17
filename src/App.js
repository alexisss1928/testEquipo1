import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, Home, RestPass, SignUp, Video, Profile, Verficada, InformacionAcademica, 
  Intereses } from "pages"
import "./App.scss"
import { Empleadorperfil } from "pages/empleador/empleadorperfil"
import { Registrovacantes } from "pages/empleador/registrovacantes"
import { CuentaActivada } from "pages/login-succes/cuentaActivada"
import { Vacantes } from "pages/vacantes/vacantes"

function  App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} /> {/*Create*/}
        <Route path="/registrovacantes" element={<Registrovacantes />} /> {/*Create*/}
        <Route path="/restpass/" element={<RestPass />} />
        {/* HomeCreate*/}
        <Route path="/sign-up" element={<SignUp />} /> {/* Create */}
        <Route path="/Video" element={<Video />} /> 
        <Route path="/profile/" element={<Profile />} /> 
        <Route path="/intereses/" element={<Intereses />} /> 
        <Route path="/informacionacademica" element={<InformacionAcademica/>} /> 
        <Route path="/empleador/registrovacantes" element={<Registrovacantes />} />
        <Route path="empleador/empleadorperfil" element={<Empleadorperfil/>} /> 
        <Route path="/auth/verify-email/:token" element={<Verficada />} /> 
        <Route path="/cuentaActivada" element={<CuentaActivada />} /> 
        <Route path="/vacantes" element={<Vacantes/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
