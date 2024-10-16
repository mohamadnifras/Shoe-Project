import React, { useState } from 'react'

function RegistrationPage() {
    const [formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        conpassword:'',
    })
    const [formErrors,setFormErrors]=useState({})
    const handleChange =(e)=>{
       const { name, value } = e.target;
       setFormData({ ...formData, [name]: value });
    };
    const handleSubmit=(e)=>{
     e.preventDefault();
    const validationErrors=validate(formData);
    setFormErrors(validationErrors);
    
    // Proceed only if no errors
    if (Object.keys(validationErrors).length === 0){
        alert('Form submitted successfully!');
    }
   };
  const validate=(values)=>{
    let errors = {}

    // First Name validation
    if(!values.firstname.trim()){
        errors.firstname = 'First name is required';
    }
    // Last Name validation
    if (!values.lastname.trim()) {
        errors.lastname = 'Last name is required';
      }
    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    // Password validation
    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
  
      // Confirm Password validation
      if (!values.conpassword) {
        errors.conpassword = 'Confirm password is required';
      } else if (values.conpassword !== values.password) {
        errors.conpassword = 'Passwords do not match';
      }
  
      return errors;
      
    };
  return (
   <div className='container mt-5 bg-secondary' >
    <div className='row'>
      <div className='col-md-6' > 
       <img src="https://plus.unsplash.com/premium_photo-1670983858433-8ef0f54f0c71?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""   style={{width:'100%',height:'100%', objectFit: 'cover'}}/>
        </div> 
       <div className='col-md-6 bg-light p-4'>
        <h2 className="text-center fw-bold " >REGITRATION FORM</h2>
         <form onSubmit={handleSubmit}>
            <div className='form-row'>
                <div className='form-group'>
                    <label >First Name</label>
                    <input 
                    className='form-control'
                     type="text" 
                     name='firstname'
                    placeholder='first name'
                    value={formData.firstname}
                    onChange={handleChange}
                    />
                    {formErrors.firstname && (
            <small className="text-danger">{formErrors.firstname}</small>
          )}
                </div>
                <div className='form-group'>
                    <label >Last Name</label>
                    <input 
                    className='form-control'
                     type="text" 
                     name='lastname'
                    placeholder='last name'
                    value={formData.lastname}
                    onChange={handleChange}
                    />
                    {formErrors.lastname && (
            <small className="text-danger">{formErrors.lastname}</small>
          )}
                </div>
               
                <div className='form-group '>
                    <label >Email</label>
                    <input 
                    className='form-control'
                     type="email"
                     name='email' 
                    placeholder='Enter email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {formErrors.email && (
            <small className="text-danger">{formErrors.email}</small>
          )}
                </div>
                <div className='form-group '>
                    <label >Password</label>
                    <input 
                    className='form-control'
                     type="password"
                     name='password' 
                    placeholder='Enter password'
                    value={formData.password}
                    onChange={handleChange}
                    />
                    {formErrors.password && (
            <small className="text-danger">{formErrors.password}</small>
          )}
                </div>
                <div className='form-group '>
                    <label >Confirm Password</label>
                    <input 
                    className='form-control'
                     type="password"
                     name='conpassword' 
                    placeholder='Enter Con-password'
                    value={formData.conpassword}
                    onChange={handleChange}
                    />
                    {formErrors.conpassword && (
            <small className="text-danger">{formErrors.conpassword}</small>
          )}
                </div>
               <div className='text-center'>
               <button type='submit'className="btn btn-primary mt-3 ">Register</button>
               </div>
                </div>
         </form>
       </div>
    </div>
   </div>
  )
}

export default RegistrationPage