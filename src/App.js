import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/Home/404/NotFound';
import Register from './Component/Home/Register/Register';
import Login from './Component/Home/Login/Login';
import Home from './Component/Home/Home/Home';
import DeliveryBtn from './Component/Home/DeliveryBtn/DeliveryBtn';
import AddItem from './Component/Home/AddItem/AddItem';
import ManageInventory from './Component/Home/ManageInventory/ManageInventory';
import Manage from './Component/Home/ManageInventory/Manage';
import Blog from './Component/Home/Blog/Blog';
import MyItem from './Component/MyItem/MyItem';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        {/* <Route path='about' element={<About></About>}></Route> */}
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='delivery' element={<DeliveryBtn></DeliveryBtn>}></Route>
        <Route path='addItem' element={<AddItem></AddItem>}></Route>
        <Route path='myitem' element={<MyItem></MyItem>}></Route>
        <Route path='manageInventory' element={<Manage></Manage>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes >

      <Footer></Footer>





    </div>
  );
}

export default App;
