import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/404";
import HeaderTopBar from "./components/layout/AppBar";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import CheckOut from "./pages/check-out/check-out";
import ProductSinglePage from "./pages/Product/productSingle";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <HeaderTopBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/products/:productId">
            <ProductSinglePage />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
