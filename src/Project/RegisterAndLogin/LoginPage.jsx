import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';


function LoginPage() {
  return (
    <div  className="flex justify-center items-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: 'url("https://i.pinimg.com/originals/e6/16/50/e61650efc5d6acff4c558aab0830d07a.jpg")' }}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>
        <Formik>
        {()=>(
          <Form>
          <div className="mb-4">
            <label className="block text-white mb-1">Username</label>
            <input
             type="text"
             name='username'
             className="w-full p-3 border border-gray-300 rounded-md bg-white" 
             />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Password</label>
            <input type="password" 
            name='password'
            className="w-full p-3 border border-gray-300 rounded-md bg-white" 
            />
          </div>
          <button type='submit' className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300" >Login</button>
          <p  className="text-white text-center mt-4">
            Dont't have an account? <Link to='/'  className="text-blue-400 underline">Register</Link>
          </p>
        </Form>
        )}
        </Formik>
      </div>
    </div>
  )
}



export default LoginPage

