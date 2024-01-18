import { LoginInferSchema, LoginSchemas } from "@/lib/types";
import { getCustumer, loginApi } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInferSchema>({ resolver: zodResolver(LoginSchemas) });

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginInferSchema) => {
      return loginApi(data);
    },
    onMutate: () => {
      setLoading(true);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      setLoading(false);
      getCustumer(data.userId);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    },
  });

  const submit: SubmitHandler<LoginInferSchema> = (data) => {
    mutation.mutate(data);
    reset();
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
        {errors.userName && (
          <span className="text-red-500">{errors.userName.message}</span>
        )}
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
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-white bg-red-500 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {loading ? "loading....." : "Create an account"}
      </button>
    </form>
  );
};
export default SignInForm;
