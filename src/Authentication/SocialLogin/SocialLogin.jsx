import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
         <div className=" space-y-3">
      <button
        // onClick={haldleGoogleSignIn}
        className="btn rounded w-full bg-[#cce3de] text-[#6b9080] flex justify-center border-none"
      >
        <FaGoogle size={20} /> Login With Google
      </button>
      <button className="btn rounded w-full bg-[#cce3de] text-[#6b9080] flex justify-center border-none">
        <FaGithub size={20} /> Login With Github
      </button>
      <button className="btn rounded w-full bg-[#cce3de] text-[#6b9080] flex justify-center border-none">
        <FaFacebook size={20} /> Login With Facebook
      </button>
    </div>
    );
};

export default SocialLogin;