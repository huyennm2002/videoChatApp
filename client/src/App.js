import Home  from './components/Home';
import Join from './components/Join';
import Create from './components/Create';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/join' element={<Join/>}/>
        <Route path = '/create' element={<Create/>}/> 
      </Routes>
    </Router> 
  );
}



export default App;
