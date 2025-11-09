import { AltaVuelo } from "./pages/AltaVuelo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleVuelo from "./pages/DetalleVuelo";

// ✅ Eliminado redux/auth y ProtectedRoutes
// ✅ Todas las rutas ahora son públicas
// ✅ Home es pantalla inicial

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Primera pantalla -> HOME */}
        <Route path="/" element={<Home />} />

        {/* Si necesitás entrar igual a login / signup para pruebas */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Rutas que antes eran protegidas */}
        <Route path="/vuelos/:id" element={<DetalleVuelo />} />
        <Route path="/vuelos/nuevo" element={<AltaVuelo />} />

      </Routes>
    </BrowserRouter>
  );
}

