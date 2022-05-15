import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import Manageitem from './component/Manageitem';
import SignUp from './component/Login/SignUp';
import Blogs from './component/Blogs/Blogs';
import Footer from './component/Footer/Footer';
import Myitem from './component/Myitem';
import Additem from './component/Additem';




function App() {



  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageitem' element={<Manageitem></Manageitem>}></Route>
        <Route path='/myitem' element={<Myitem></Myitem>}></Route>
        <Route path='/additem' element={<Additem></Additem>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
