import React from "react";
import Logo from "/Logo.png";

const SignUp: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-cover bg-center bg-login font-['Lexend_Deca']">
      <div className="bg-white flex flex-col justify-center items-center shadow-2xl w-[400px] sm:w-[90%] max-w-md h-[auto] sm:h-[auto] rounded-3xl p-6">
        
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-20 w-20 mb-4 animate-fade-in" />

        {/* Title */}
        <p className="text-2xl sm:text-xl font-bold mb-6">Sign Up</p>

        {/* Form */}
        <div className="flex flex-col justify-center items-center w-full gap-4">
          {/* Email */}
          <label className="text-sm sm:text-xs w-full pl-2">Your email address:</label>
          <input
            type="email"
            placeholder="e.g F.Toress@Gmail.com"
            className="
              bg-[#E0E0FF] rounded-lg px-4 py-3 w-full
              focus:outline-none focus:ring-2 focus:ring-blue-400
              hover:scale-[1.02] transition-all duration-200
            "
          />

          {/* Username */}
          <label className="text-sm sm:text-xs w-full pl-2 mt-2">Your Username:</label>
          <input
            type="text"
            placeholder="e.g F.Toress..."
            className="
              bg-[#E0E0FF] rounded-lg px-4 py-3 w-full
              focus:outline-none focus:ring-2 focus:ring-blue-400
              hover:scale-[1.02] transition-all duration-200
            "
          />

          {/* Password */}
          <label className="text-sm sm:text-xs w-full pl-2 mt-2">Your Password:</label>
          <input
            type="password"
            placeholder="••••••••"
            className="
              bg-[#E0E0FF] rounded-lg px-4 py-3 w-full
              focus:outline-none focus:ring-2 focus:ring-blue-400
              hover:scale-[1.02] transition-all duration-200
            "
          />

          {/* Submit */}
          <button
            type="submit"
            className="
              bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
              flex justify-center items-center px-6 py-3 rounded-lg 
              w-full sm:w-3/5 mt-4
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-indigo-700
            "
          >
            Submit
          </button>

          {/* Footer */}
          <p className="mt-4 text-sm sm:text-xs text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
