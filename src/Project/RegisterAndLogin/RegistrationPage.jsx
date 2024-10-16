import axios from 'axios';
import React from 'react'
import { useFormik, Form, Field, Formik } from 'formik';
import { RegisterValidation } from './RegisterValidation';
const initialValues ={
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  conpassword:''
}
function RegistrationPage() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row' >
      <div className='flex-1 '>
         <img src="https://plus.unsplash.com/premium_photo-1670983858433-8ef0f54f0c71?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='flex-1 p-8'>
      <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">REGITRATION FORM</h2>
        <Formik
        initialValues={initialValues}
        validationSchema={RegisterValidation}
        validateOnChange={false}
        validateOnBlur={true}
        >
          {({errors})=>(
          <Form>
            
            <div className='grid grid-cols-2 gap-4 mb-4'>
                <div className=''>
                    <label className="block mb-2">First Name</label>
                  <Field type='text' name='firstname' className="w-full p-2 border rounded-md"></Field>
                    {errors.firstname && <small className="text-red-500">{errors.firstname}</small>}
                </div>
                <div className=''>
                    <label className="block mb-2">Last Name</label>
                    <Field type='text' name='lastname' className="w-full p-2 border rounded-md"></Field>
                    {errors.lastname && <small className="text-red-500">{errors.lastname}</small>}
                </div>
                </div>

                <div className='mb-4'>
                    <label className="block mb-2">Email</label>
                    <Field type='email' name='email'  className="w-full p-2 border rounded-md"></Field>
                    {errors.email && <small className="text-red-500">{errors.email}</small>}
                </div>
                <div className='className="block mb-2"'>
                    <label >Password</label>
                    <Field type='password' name='password' className="w-full p-2 border rounded-md"></Field>
                    {errors.password && <small className="text-red-500">{errors.password}</small>}
                </div>
                <div className=' className="block mb-2'>
                    <label >Confirm Password</label>
                    <Field type='password' name='conpassword' className="w-full p-2 border rounded-md"></Field>
                    {errors.conpassword && <small className="text-red-500">{errors.conpassword}</small>}
                </div>
               <div className=''>
               <button type='submit'className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Register</button>
               </div>
                
         </Form>
          )}
      

       </Formik>
    </div>
    </div>
   
  )
}

export default RegistrationPage