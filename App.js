
import './App.css';
import Welcome from './Welcome';
import Email from './Email';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='bg'>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Welcome/>}/>
       
        <Route path='/email' element={<Email/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
