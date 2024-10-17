import axios from 'axios'
import React, { createContext } from 'react'

export const passContext = createContext()
function Context({children}) {
  //all ready register
  const userRegister= async (email)=>{
     try{
      const isRegisterData = await axios.get(`http://localhost:5000/users?email=${email}`);
     console.log('User already registered:',isRegisterData.data);
     return isRegisterData
     }catch(error){
      console.error("Error checking user registration:", error);
     }
  }
// new register
  const addRegister = async (userData)=>{
   try{
    
    const AddRegister = await axios.post('http://localhost:5000/users',userData);
    console.log("this is new  registration " , AddRegister);
    return AddRegister;
    
   }catch(error){
    console.error("Error confirm user registration:",error);
    
   }
  }

  //login page
  const loginRegister = async (email, password)=>{
  try{
    const newLogin = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`)
    return newLogin
  }catch(error){
    console.log(error);
    
  }
  }
  return (
    <passContext.Provider value={{userRegister,addRegister,loginRegister}}>
      {children}
    </passContext.Provider>
  )
}

export default Context