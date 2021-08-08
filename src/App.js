import './App.css';
import Header from './Component/Header/header-component';
import ProductPage from './Component/ProductListing/productListing';
import DetalisProduct from './Component/DetailsProduct/detalisProduct';
import {Route} from 'react-router-dom';
import CheckOut from './Component/CheckOut/chechOut-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {

const AddNotify = () => {
    toast.success(' Product Added ', {
      autoClose: 2500,
    })
} 
const RemoveNotify = () => {
  toast.error(' Product  Is Removed',{
    autoClose: 2500,
  })
} 
const QunatityNotify = () => {
  toast.dark('You Change The Quantity',{
    autoClose: 2500,
  })
} 

  return (
    <div className="App">
      <Header/>
      <ToastContainer  hideProgressBar />
      <Route exact path="/"> <ProductPage AddNotify ={AddNotify}/> </Route>
      <Route path ="/product/:productId"><DetalisProduct AddNotify ={AddNotify} /></Route>
      <Route path='/checkout'><CheckOut RemoveNotify={RemoveNotify} QunatityNotify={QunatityNotify}/></Route>
    </div>
  );
}

export default App;
