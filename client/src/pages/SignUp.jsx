import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setError("Please fill all the fields ");
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="font-poppins p-3 max-w-lg mx-auto mt-5 rounded-md">
        <h1 className="text-3xl my-5 font-semibold text-center">Sign Up</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
            name="email"
            onChange={handleChange}
          />
          <input
            className="bg-[#eeee] rounded-lg px-3 py-2 outline-none"
            placeholder="password"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 px-3 py-2 rounded-lg hover:opacity-95 disabled:opacity-80"
            disabled={loading}
          >
            {loading ? "loading" : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="mt-5">
          <p>
            Have an account?{" "}
            <span className="text-blue-700">
              <Link to={"/sign-in"}>Sign in</Link>
            </span>
          </p>
        </div>
        {error && (
          <p className="bg-red-500 text-white p-3 rounded-md">{error}</p>
        )}
      </div>
    </>
  );
};
export default SignUp;
