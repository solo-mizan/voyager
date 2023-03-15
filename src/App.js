import { Route, Routes } from 'react-router';
import Home from './components/Pages/Home/Home';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Pages/Contact/Contact';
import Service from './components/Pages/Service/Service';
import TopDeals from './components/Pages/TopDeals/TopDeals';
import Package from './components/Pages/Package/Package';
import Gallery from './components/Pages/Gallery/Gallery';
import Blog from './components/Pages/Blog/Blog';
import Login from './components/Pages/Authentication/Login/Login';
import Register from './components/Pages/Authentication/Register/Register';

function App() {
  return (
    <div className='body'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/top-deals' element={<TopDeals></TopDeals>}></Route>
        <Route path='/package' element={<Package></Package>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
