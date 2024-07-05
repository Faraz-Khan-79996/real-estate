import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios'

function Signin() {
  const [formData, setFormData] = useState({
    email : "",
    password : "",
  });
  const [error , setError] = useState(null)
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((data)=>{
      return {...data , [e.target.id]:e.target.value}
    })
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    setLoading(prev => true)
    
    try {
      const {data} = await axios.post('/api/auth/signin' , formData , {
        withCredentials : true,
      } )
      navigate('/')
      
    } catch (error) {
      if(error.response){
        setError(error.response.data.message)
      }
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:cursor-wait disabled:opacity-80"
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        {/* <OAuth/> */}
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't Have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}

export default Signin;
