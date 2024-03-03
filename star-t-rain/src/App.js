
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';
import LoginPage from './pages/login/Login';
import ProductDetails from './pages/product-detail/ProductDetails';
import LayoutPrivate from './theme/LayoutPrivate';
import MenuJuice from './components/MenuJuice';
import GoiMonThem from './UI/GoiMonThem'
import BunBoPhoDa from './UI/BunBoPhoDa';
import BunBoTruyenThong from './UI/BunBoTruyenThong'
import Register from './pages/register/Register';
import Restaurant from './restaurant/Restaurant';
import Order from './order/Order';
import RestaurantDetail from './restaurant/RestaurantDetail';
import UserProfile from './userprofile/UserProfile';
import ManageOrder from './order/ManageOrder';
import OrderSuccess from './order/OrderSuccess';
import OrderCancel from './order/OrderCancel';
import Dashboard from './admin/Dashboard';
import OrderManagement from './admin/OrderManagement';
import ProductManagement from './admin/ProductManagement';
import UserManagement from './admin/UserManagement';
import OrderDetail from './order/OrderDetail';
import EditProduct from './product/EditProduct';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/prodetail' element={<ProductDetails />}></Route>
        <Route element={<LayoutPrivate />}>
          <Route path="juice" element={<MenuJuice />} ></Route>
          <Route path="goi-mon-them" element={<GoiMonThem />}></Route>
          <Route path="bun-bo-tho-da" element={<BunBoPhoDa />} />
          <Route path="bun-bo-truyen-thong" element={<BunBoTruyenThong />} />
        </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/restaurant' element={<Restaurant />}></Route>
        <Route path='/order' element={<Order />}>

        </Route>
        <Route path='/manageorder' element={<ManageOrder />}>
          <Route path='success' element={<OrderSuccess />}></Route>
          <Route path='cancel' element={<OrderCancel />}></Route>
        </Route>
        <Route path='/restaurantdetail' element={<RestaurantDetail />}></Route>
        <Route path='/userpofile' element={<UserProfile />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/ordermanagement' element={<OrderManagement />}></Route>
        <Route path='/productmanagement' element={<ProductManagement />}></Route>
        <Route path='/editproduct' element={<EditProduct></EditProduct>}></Route>
        <Route path='/usermanagement' element={<UserManagement />}></Route>
        <Route path='/orderdetail' element={<OrderDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
