import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/menu';
import Rodape from './componentes/rodape';
import PaginaPadrao from './componentes/PaginaPadrao';

function AppRoutes() {

  return (
    
    <BrowserRouter>

      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route
            index
            element={<Inicio/>}
          />
          <Route
            path='sobremim'
            element={<SobreMim/>}
          />
        </Route>
        
        <Route
          path='*'
          element={<div>Página não encontrada</div>}
        />
      </Routes>

      <Rodape/>

    </BrowserRouter>
  );
}

export default AppRoutes;
