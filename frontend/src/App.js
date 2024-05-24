import{BrowserRouter,Routes,Route} from"react-router-dom"
import ProductList from "./components/ProductList.jsx";
import UserList from"./components/UserList.jsx"
import Addproduct from "./components/addproduct.jsx";
import EditProduct from "./components/editProduct.jsx";
import AddUser from "./components/adduser.jsx";
import EditUser from "./components/editUser.jsx";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    {/* product */}
    <Route path="/" element={<ProductList/>} />
    <Route path="/add" element={<Addproduct/>} />
    <Route path="/edit/:id" element={<EditProduct/>} />
    {/* user */}
    <Route path="/user" element={<UserList/>} />
    <Route path="/adduser" element={<AddUser/>} />
    <Route path="/edituser/:id" element={<EditUser/>} />


   
   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
