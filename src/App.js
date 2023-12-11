import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Header from './components/Header'
import Home from './Pages/Home';
function App() {
  return (
    <>
    <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>

     </Routes>
    
    </>
  );
}

export default App;
