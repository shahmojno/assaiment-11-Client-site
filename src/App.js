
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import Manageitem from './component/Manageitem';
import Additem from './component/Additem';


const auth = getAuth(app);






function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageitem' element={<Manageitem></Manageitem>}></Route>
        <Route path='/additem' element={<Additem></Additem>}></Route>
      </Routes>

      <h1>SmartPhone Inventory</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
