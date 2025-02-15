import axios from "axios";
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'
const Signup = () => {

  const navigate=useNavigate();
  const [user,setUser]=useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",

  })
  const handleCheckBox=(gender)=>{
    setUser({...user,gender})

  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    setUser({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
    })
    console.log(user)

    try {
      const res=await axios.post(`http://localhost:8000/api/v1/user/register`,user,{
        headers:{
          "Content-Type":'application/json'
        },
        withCredentials:true
      })
      if(res.data.success){
       toast.success(res.data.message);
      }
     navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-600">Signup</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label className="label p-2 "><span className="text-base label-text">Full Name </span></label>
            <input value={user.fullname} onChange={(e)=>setUser({...user,fullname:e.target.value})} className="w-full input input-bordered h-10" type="text" placeholder="Enter Your full Name" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">Username </span></label>
            <input value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} className="w-full input input-bordered h-10" type="text" placeholder="Enter Your Username" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">Password </span></label>
            <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className="w-full input input-bordered h-10" type="Password" placeholder="Enter Your Password" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">confirm Password </span></label>
            <input value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})} className="w-full input input-bordered h-10" type="Password" placeholder="Confirm Your Password" />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input checked={user.gender==="male"} onChange={()=>handleCheckBox("male")} className="checkbox mx-2" type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input checked={user.gender==="female"} onChange={()=>handleCheckBox("female")} className="checkbox mx-2" type="checkbox" defaultChecked />
            </div>
          </div>
          <div className="flex items-center">
            <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700">Signup</button>
          </div>
          <div className="text-center flex items-center mt-2 w-full mx-auto">
            <p>
                Already have an account ?
                <Link to="/login" className="text-blue-100"> Please login</Link>
            </p>
          </div>


        </form>
      </div>
    </div>
  );
};

export default Signup;
