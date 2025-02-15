import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {

    const navigate=useNavigate();
    const [user,setUser]=useState({
      username:"",
      password:"",
  
    })

    const submitHandler=async(e)=>{
      e.preventDefault();
      setUser({
      username:"",
      password:"",
      })
      console.log(user)

      try {
        const res=await axios.post(`http://localhost:8000/api/v1/user/login`,user,{
          headers:{
            "Content-Type":'application/json'
          },
          withCredentials:true
        })
        if(res.data.success){
         toast.success(res.data.message);
        }
       navigate("/")
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      }
    }

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-600">Login</h1>

        <form onSubmit={submitHandler}>
          
          <div>
            <label className="label p-2 "><span className="text-base label-text">Username </span></label>
            <input value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} className="w-full input input-bordered h-10" type="text" placeholder="Enter Your Username" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">Password </span></label>
            <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className="w-full input input-bordered h-10" type="Password" placeholder="Enter Your Password" />
          </div>
          
          <div className="flex items-center my-4">
            <button type='submit' className="btn btn-block btn-sm mt-2 border border-slate-700">Login</button>
          </div>
          <div className="text-center flex items-center mt-2 w-full mx-auto">
            <p>
                Dont have an account ?
                <Link to="/signup" className="text-blue-100"> Please Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login