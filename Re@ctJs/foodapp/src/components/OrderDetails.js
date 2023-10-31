import React, { useEffect, useState } from 'react';


 

const OrderDetails = () => {
  const [formData, setFormData] = useState({
    pizza: 0,
    burgers: 0,
    mojitos: 0,
  });
  

  const [customerDetails,setCustomerDetails,orderDetails,setOrderDetails] = useState([]);
  useEffect(()=>{
    if(JSON?.parse(window.localStorage.getItem("customerdetails"))?.length){
      setCustomerDetails(JSON?.parse(window.localStorage.getItem("customerdetails")))
    }
  },[])

  console.log(customerDetails)
  

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value >= 0 ? value : 0,
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.pizza === 0 && formData.burgers === 0 && formData.mojitos === 0) {
      alert("Please select at least one item.");
      return;
    }
    else{
      alert("Order placed!!!");
      setOrderDetails([...orderDetails, formData]); 
      window.localStorage.setItem("orderDetails", JSON.stringify([formData,...OrderDetails]));
      console.log('data', OrderDetails);
      

    }
  };

 

  return (
    <form onSubmit={handleSubmit}><br></br><br></br>
      <center>
      <table style={{ border: "5px solid black", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "3px solid cyan" }}>First Name</th>
              <th style={{ border: "3px solid cyan" }}>Last Name</th>
              <th style={{ border: "3px solid cyan" }}>E-mail</th>
              <th style={{ border: "3px solid cyan" }}>Pizza</th>
              <th style={{ border: "3px solid cyan" }}>Burgers</th>
              <th style={{ border: "3px solid cyan" }}>Mojitos</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails?.map((customer, index) => (
              <tr key={index}>
                <td style={{ border: "3px solid black" }}>{customer.firstName}</td>
                <td style={{ border: "3px solid black" }}>{customer.lastName}</td>
                <td style={{ border: "3px solid black" }}>{customer.email}</td>
                <td style={{ border: "3px solid black" }}> 
                <input
              type="number"
              name="pizza"
              value={formData.pizza}
              onChange={handleChange}/></td>
              <td style={{ border: "3px solid black" }}><input
              type="number"
              name="burgers"
              value={formData.burgers}
              onChange={handleChange} /></td>
              <td style={{ border: "3px solid black" }}><input
              type="number"
              name="mojitos"
              value={formData.mojitos}
              onChange={handleChange} /></td>
                {/* <td style={{ border: "1px solid black" }}>
                  <button onClick={() => deleteContact(index)}>Delete</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        </center>
        <center>
        <input type="submit"/>     
          </center>
    </form>
    
  );
};

 

export default OrderDetails;
 

