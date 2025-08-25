import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
  role: "student" | "professor";
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
 

    // Redirect based on role
    if (data.role === "professor") {
      navigate("/instructor-dashboard");
    } else {
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-2 border-black w-full max-w-md p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" }
              })}
              className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 text-gray-600 hover:text-black"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <select
            {...register("role", { required: "Please select a role" })}
            className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
          {errors.role && (
            <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>

        {/* Link */}
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-black font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
