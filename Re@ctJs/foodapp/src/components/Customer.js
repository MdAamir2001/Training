import React, { useEffect, useState } from 'react'; // Added 'React' and removed extra import statement

import './Customer.css';

function Customer() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  useEffect(()=>{
    setFormData(initialFormData)
  },[])

  const [formData, setFormData] = useState(initialFormData);
  const [customerDetails, setCustomerDetails] = useState([]); // Changed from 'this.state.customerDetails' to a state variable

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required'; // Updated to set errors in state
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required'; // Updated to set errors in state
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address'; // Updated to set errors in state
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits'; // Updated to set errors in state
      isValid = false;
    }

    setFormErrors(errors); // Updated to set errors in state
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setCustomerDetails([...customerDetails, formData]); // Updated to set customerDetails in state
      window.localStorage.setItem("customerdetails", JSON.stringify([formData,...customerDetails]));
      console.log('data', customerDetails);

      window.alert('Details added');
    } else {
      window.alert('Form submission failed. Please check for errors.'); // Moved alert to else block
    }

    setFormData(initialFormData);
    setFormErrors({});
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setFormErrors({});
  };

  const deleteContact = (index) => {
    const updatedCustomerDetails = customerDetails.filter((_, i) => i !== index);
    setCustomerDetails(updatedCustomerDetails);
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          First Name:
          <input type="text" placeholder="Enter your first name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          <span className="error">{formErrors.firstName}</span> <br /><br />
          Last Name: 
          <input type="text" placeholder="Enter your last name" name="lastName" value={formData.lastName} onChange={handleInputChange} required /> <span className="error">{formErrors.lastName}</span>
          <br /><br />
          Email: <input type="text" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} required /> <span className="error">{formErrors.email}</span>
          <br /><br />
          Phone:
          <input type="text" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleInputChange} required /> <span className="error">{formErrors.phone}</span>
          <br /><br />
          <input type="submit" value="Submit" />
          <input type="button" value="Reset" onClick={handleReset} />
          </form>
          <table style={{ border: "8px solid cyan",width:"100",height:"200", borderCollapse: "collapse",color:"blue" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>First Name</th>
              <th style={{ border: "1px solid black" }}>Last Name</th>
              <th style={{ border: "1px solid black" }}>Email</th>
              <th style={{ border: "1px solid black" }}>Phone</th>
              <th style={{ border: "1px solid black" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails.map((customer, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black" }}>{customer.firstName}</td>
                <td style={{ border: "1px solid black" }}>{customer.lastName}</td>
                <td style={{ border: "1px solid black" }}>{customer.email}</td>
                <td style={{ border: "1px solid black" }}>{customer.phone}</td>
                <td style={{ border: "1px solid black" }}>
                  <button onClick={() => deleteContact(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Customer;







