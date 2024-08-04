import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(userInfo);
    navigate('/expenseform'); // Redirect to the /expenseform route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col w-72 mx-auto p-5 border border-gray-300 rounded-lg shadow-md bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={userInfo.name} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={userInfo.email} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            value={userInfo.password} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;