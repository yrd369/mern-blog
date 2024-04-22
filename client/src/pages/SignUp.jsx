import { Link } from "react-router-dom";

const SignUp = () => {
  const handleChange = (e) => {};

  return (
    <>
      <div className="font-poppins p-3 max-w-lg mx-auto mt-5 rounded-md">
        <h1 className="text-3xl my-5 font-semibold text-center">Sign Up</h1>
        <form className="flex flex-col gap-5">
          <input
            className="bg-[#eeee] rounded-lg px-3 py-2 outline-none"
            placeholder="username"
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
          />

          <input
            className="bg-[#eeee] rounded-lg px-3 py-2 outline-none"
            placeholder="example@gmail.com"
            id="email"
            type="email"
            onChange={handleChange}
          />
          <input
            className="bg-[#eeee] rounded-lg px-3 py-2 outline-none"
            placeholder="password"
            id="password"
            type="password"
            onChange={handleChange}
          />
          <button className="bg-blue-500 px-3 py-2 rounded-lg hover:opacity-95 disabled:opacity-80">
            Sign up
          </button>
        </form>
        <div className="mt-5">
          <p>
            Have an account?{" "}
            <span className="text-blue-700">
              <Link to={"/sign-in"}>Sign in</Link>
            </span>
          </p>
        </div>
        {/* {error && (
          <p className="bg-red-500 text-white p-3 rounded-md">{error}</p>
        )} */}
      </div>
    </>
  );
};
export default SignUp;
