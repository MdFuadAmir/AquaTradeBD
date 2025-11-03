import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const {
        register,
        formState: { errors },
      } = useForm();
  return (
    <div className="p-4 bg-slate-400 shadow-2xl rounded-xl">
      <h1 className="text-4xl font-bold text-center underline text-gray-800 mb-8 tracking-wide drop-shadow-lg">
        Create Account
      </h1>
      <form className="space-y-4">
        {/* Profile Picture */}
          <div className="flex items-center gap-4">
            <div className="border border-teal-300 h-24 w-24 rounded-xl">
              {/* {profileImage ? (
                <img
                  src={profileImage}
                  alt="Preview"
                  className="w-24 h-24 object-center rounded-xl"
                />
              ) : (
                <p className="text-center items-center text-teal-200">Your Profile Image</p>
              )} */}
            </div>
            <div className="w-1/2">
              <label className="text-white text-sm font-semibold mb-1 block">
                Profile Picture
              </label>
              <input
                // onChange={handleImageUploade}
                type="file"
                placeholder="Enter profile image URL"
                className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
        {/* name */}
        <div>
          <label className="text-gray-600 text-sm font-semibold mb-1 block">
            Your Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">name is required</p>
          )}
        </div>
        {/* email */}
        <div>
          <label className="text-gray-600 text-sm font-semibold mb-1 block">
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
          <label className="text-gray-600 text-sm font-semibold mb-1 block">
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
        {/* button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#588157] hover:bg-[#3a5a40] text-white font-semibold text-lg transition-all duration-300 shadow-md"
        >
          Log In
        </button>
      </form>
      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="h-px flex-1 bg-[#eaf4f4]"></div>
        <span className="text-white text-sm">OR</span>
        <div className="h-px flex-1 bg-[#eaf4f4]"></div>
      </div>
      <SocialLogin />
      {/* Sign Up Link */}
      <p className="text-center text-sm text-[#eaf4f4] mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#370617] font-semibold transition-colors"
        >
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
