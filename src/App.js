
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { FormContact } from './components/FormContact';

import { Principal } from './components/Principal';
import { Respuesta } from './components/Respuesta';
import { TablaLaboral } from './components/TablaLaboral';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/home' element={<Principal/>} />
          <Route exact path='/experiencia' element={<TablaLaboral/>} />
          <Route exact path='/contacto' element={<FormContact/>} />
          <Route exact path='/respuesta' element={<Respuesta/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
