import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { FaEnvelope, FaFacebook, FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-cover bg-center bg-login font-['Lexend_Deca']">
      <div className="bg-white flex flex-col justify-center items-center shadow-2xl w-[400px] sm:w-[90%] max-w-md h-auto sm:h-auto rounded-3xl p-6">
        
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-20 w-20 mb-4 animate-fade-in" />

        {/* Login Title */}
        <p className="text-2xl sm:text-xl font-bold mb-6">Login</p>

        {/* Options */}
        <div className="flex flex-col justify-center items-center w-full gap-4">
          
          {/* Google */}
          <div className="flex items-center justify-center gap-3 text-lg sm:text-base w-full sm:w-4/5 px-4 py-3 rounded-lg bg-[#DB4437] text-white cursor-pointer
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#C1351D]">
            <FaGoogle size={20}/> Via Google
          </div>

          {/* Facebook */}
          <div className="flex items-center justify-center gap-3 text-lg sm:text-base w-full sm:w-4/5 px-4 py-3 rounded-lg bg-[#1877F2] text-white cursor-pointer
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#0F61D3]">
            <FaFacebook size={20}/> Via Facebook
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-3 text-lg sm:text-base w-full sm:w-4/5 px-4 py-3 rounded-lg bg-gray-100 text-black border border-gray-300 cursor-pointer
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200">
            <FaEnvelope size={20}/> Via Email
          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-sm sm:text-xs text-gray-600 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
