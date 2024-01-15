import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const [formData, setFormdata] = useState();
  console.log(formData);
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    const initialValue = {
      userId: 0,
      role: "user",
      restaurantId: 0,
    };
    setFormdata({ ...data, ...initialValue });
  };

  return (
    <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit(submit)}>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          {...register("emailId")}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
        <input
          type="string"
          {...register("userName")}
          placeholder="Enter Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mobile Number
        </label>
        <input
          type="Number"
          {...register("mobileNo")}
          placeholder="Enter Mobile Number"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="string"
          {...register("password")}
          placeholder="Enter Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Login here
        </a>
      </p>
    </form>
  );
};

const SignInForm = () => {
  const [formData, setFormdata] = useState();
  console.log(formData);
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    setFormdata({ ...data });
  };

  return (
    <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit(submit)}>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
        <input
          type="string"
          {...register("userName")}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="string"
          {...register("password")}
          placeholder="Enter Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-red-500 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Did not an account?{" "}
        <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Sign Up here
        </a>
      </p>
    </form>
  );
};

interface Authtype {
  type: "Sign Up" | "Log In";
}

const AuthModel = ({ type }: Authtype) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <p className="text-xl text-grays">{type}</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="p-2 space-y-1 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {type === "Log In" ? "Log In" : "Create and account"}
            </h1>
            {type === "Log In" ? <SignInForm /> : <SignUpForm />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModel;
