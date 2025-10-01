import { useState, type FormEvent } from "react";
import Input from "./Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { TiVendorApple } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import zod from "zod";
import {login} from "../utilis/api"
const formSchema = zod.object({
  email: zod.email(),
  password: zod.string().min(8, "min 8 character password required "),
});
function LoginForm() {
  const [Error, setError] = useState<Record<string, any>>({});
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [submitted, setsubmitted] = useState<boolean>(false);
  const [show, setshow] = useState(false);
  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setsubmitted(true);
    const response = await formSchema.safeParse({
      email: email,
      password: password,
    });
    if (!response.success) {
      const issues: Array<Record<string, any>> = response.error.issues;
      issues.map((element: Record<string, any>) => {
        setError((pre) => ({ [element.path]: element?.message, ...pre }));
      });
    }
    else{
    await  login(email,password)
    }
  };

  const onchange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: any,
    
  ) => {
    try {
      const { name, value } = e.target;
      setData(value);
      if (submitted) {
        const filedschema =
          formSchema.shape[name as keyof typeof formSchema.shape];
        const response = filedschema.safeParse(value);
        setError((pre) => ({
          ...pre,
          [name]: response?.error?.issues[0]?.message,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        className="flex flex-col gap-6 bg-white shadow-lg rounded-2xl p-10 w-full max-w-md"
        onSubmit={formSubmit}
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Please enter your details to sign in
          </p>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <div className="p-3 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">
            <FcGoogle className="w-6 h-6" />
          </div>
          <div className="p-3 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">
            <TiVendorApple className="w-6 h-6" />
          </div>
          <div className="p-3 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">
            <FiGithub className="w-6 h-6" />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="absolute bg-white px-2 text-gray-500 text-xs left-1/2 -translate-x-1/2">
            OR
          </span>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Your Email Address
            </label>
            <Input
              type="text"
              autoComplete="off"
              value={email}
              name="email"
              onChange={(e) => onchange(e, setemail,)}
              className="w-full p-2 text-base rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter email"
              error={Error?.email}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <Input
              type={(show && "text") || "password"}
              value={password}
              name="password"
              onChange={(e) => onchange(e, setpassword,)}
              autoComplete="off"
              className="w-full p-2 text-base rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="••••••••"
              endIcon={
                show ? (
                  <FaEye
                    className="text-xl cursor-pointer"
                    onClick={() => setshow((pre) => !pre)}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-xl cursor-pointer"
                    onClick={() => setshow((pre) => !pre)}
                  />
                )
              }
              error={Error.password}
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 cursor-pointer" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Button */}
        <Button
          label="Sign in"
          className="bg-black hover:bg-gray-800 text-white w-full py-2.5 rounded-md text-base font-semibold transition"
          type="submit"
        />

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
