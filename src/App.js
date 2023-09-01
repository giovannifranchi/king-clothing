
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavBar from './routes/navbar/navbar.component';
import Shop from './routes/shop/shop.component';
import Contacts from './routes/contacts/contacts.component';
import SignUp from './routes/sign-up/sign-up.component';

const App = ()=> {

  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
  )
}

export default App;
