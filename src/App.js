
import './App.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home.component';
import NavBar from './components/navbar/navbar.component';

const App = ()=> {

  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App;
