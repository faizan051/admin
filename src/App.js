import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
  Router,} from "react-router-dom";
import Topbar from "./componenets/topbar/Topbar";
import Sidebar from "./componenets/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/ProductList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from './pages/login/Login';
// import login from "./pages/login/Login";
import { useSelector } from "react-redux";



function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin);


  return (
   
   <div>
   <Routes>
   <Route path="/login" element={<Login />} />
   </Routes>
  { admin && (
    <>
  <Topbar/>
     <div className="container">
      <Sidebar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/user" element={<User />} />
      <Route path="/newuser" element={<Newuser />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="//product/:productId" element={<Product />} />
      <Route path="/newproduct" element={<NewProduct />} />
      
      </Routes>
        </div> </> )}
        </div>
        
        
  
  )
}

export default App;
