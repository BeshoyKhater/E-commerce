import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import { Home, CategoryProduct, ProductSingle, Cart, Search } from "./pages/index";
//components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductSingle />} />
            <Route path='/category/:category' element={<CategoryProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search/:searchTerm' element={<Search />} />
            <Route path='/search' element={<Search />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
