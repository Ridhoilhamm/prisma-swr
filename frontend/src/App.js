import{BrowserRouter,Routes,Route} from"react-router-dom"
import ProductList from "./components/ProductList.jsx";
import UserList from"./components/UserList.jsx"
import Addproduct from "./components/addproduct.jsx";
import EditProduct from "./components/editProduct.jsx";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ProductList/>} />
    <Route path="/add" element={<Addproduct/>} />
    <Route path="/user" element={<UserList/>} />
    <Route path="/edit/:id" element={<EditProduct/>} />


   
   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
