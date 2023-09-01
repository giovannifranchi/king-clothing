
import './App.scss';
import Home from './routes/home.component';
import NavBar from './components/navbar/navbar.component';

const App = ()=> {

  return (
    <div className='app'>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App;
