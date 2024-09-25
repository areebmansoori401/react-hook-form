import React from 'react'
import { useForm } from "react-hook-form"



const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <h1>register</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

   <input style={{

   }}
    type="emial"
     placeholder='Email'
     {...register('Email', { required: true })}
   />
{errors.Email && <span>This field is required</span>}
   <br /> <br />



   <input 
   type="password" 
   placeholder='Password'
     {...register('Password', { required: true })}
   />
{errors.Password && <span>This field is required</span>}
   <br /> <br />



<button type='submit'>submit</button>


</form>    

    </>
  )
}

export default App