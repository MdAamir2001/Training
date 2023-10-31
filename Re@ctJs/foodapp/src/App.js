import './App.css';


import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Customer from './components/Customer';

import Catalogue from './components/Catalogue';

import OrderDetails from './components/OrderDetails';
  


  function App() {

    return (

    <BrowserRouter>

    <div className="App">

      <div className="displayflex">

      <Link to="/Customer"><button className='button1'><b>Customer</b></button></Link> &nbsp; &nbsp; &nbsp; &nbsp;

      <Link to="/Catalogue"><button className='button1'><b>Catalogue</b></button></Link> &nbsp; &nbsp; &nbsp; &nbsp;

      <Link to="/OrderDetails"><button className='button1'><b>OrderDetails</b></button></Link> &nbsp; &nbsp; &nbsp; &nbsp;

      </div>

    </div>

    <Routes>

      <Route path="/Customer" element={<Customer 
      
      />}/>


      <Route path="/Catalogue" element={<Catalogue/>}/>

      <Route path="/OrderDetails" element={<OrderDetails/>}/>

    </Routes>

    </BrowserRouter>

  );

}

export default App;