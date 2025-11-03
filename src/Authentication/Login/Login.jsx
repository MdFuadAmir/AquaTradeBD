import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="p-4 shadow-2xl rounded-xl bg-slate-400">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide drop-shadow-lg underline">
        Welcome Back
      </h1>
      <form className="space-y-4">
        {/* email */}
        <div>
          <label className="text-sm font-semibold mb-1 block">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">Email is required</p>
          )}
        </div>
        {/* password  */}
        <div>
          <label className=" text-sm font-semibold mb-1 block">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-400 text-sm mt-1">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-400 text-sm mt-1">
              Password must be at least 6 characters
            </p>
          )}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#588157] hover:bg-[#3a5a40] text-white font-semibold text-lg transition-all duration-300 shadow-md"
        >
          Log In
        </button>
      </form>
      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="h-px flex-1 bg-black"></div>
        <span className="text-gray-600 text-sm">OR</span>
        <div className="h-px flex-1 bg-black"></div>
      </div>
      <SocialLogin />
      {/* Sign Up Link */}
      <p className="text-center text-sm text-[#eaf4f4] mt-6">
        New here?{" "}
        <Link
          to="/signUp"
          className="text-[#370617] font-semibold transition-colors"
        >
          Create an Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
