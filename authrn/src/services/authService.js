import api from "./api";


 export async function logar(usuario){
  /* 
  const usuario ={
      email: 'halley.was@gmail.com',
      password: '123'
    }
    */
    console.log("dentro logar"+usuario)
  
    try {
     const response = await api.post('/login',usuario)
     console.log(response)
    return response.data
    } catch (error) {
      console.log(error)
     
    }
  }

 
 
 