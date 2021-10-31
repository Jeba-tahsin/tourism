import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageBook from './Pages/ManageBook/ManageBook';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        <Switch>
        <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/home'>
            <Home></Home>
         </Route>
         <Route path='/login'>
           <Login></Login>
         </Route>
         <PrivateRoute path='/booking/:id'>
           <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute path='/addService'>
           <AddService></AddService>
         </PrivateRoute>
          <PrivateRoute path='/manageBook'>
            <ManageBook></ManageBook>
          </PrivateRoute>
          <PrivateRoute path='/myBooking'>
            <MyBooking></MyBooking>
          </PrivateRoute>
          <Route path='*'>
           <NotFound></NotFound>
         </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
