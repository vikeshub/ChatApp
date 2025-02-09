import React from "react";
import {Link} from "react-router-dom"
const Signup = () => {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-600">Signup</h1>

        <form action="">
          <div>
            <label className="label p-2 "><span className="text-base label-text">Full Name </span></label>
            <input className="w-full input input-bordered h-10" type="text" placeholder="Enter Your full Name" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">Username </span></label>
            <input className="w-full input input-bordered h-10" type="text" placeholder="Enter Your Username" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">Password </span></label>
            <input className="w-full input input-bordered h-10" type="Password" placeholder="Enter Your Password" />
          </div>
          <div>
            <label className="label p-2 "><span className="text-base label-text">confirm Password </span></label>
            <input className="w-full input input-bordered h-10" type="Password" placeholder="Confirm Your Password" />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input className="checkbox mx-2" type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input className="checkbox mx-2" type="checkbox" defaultChecked />
            </div>
          </div>

          <Link>Already have an account ?</Link>

        </form>
      </div>
    </div>
  );
};

export default Signup;
