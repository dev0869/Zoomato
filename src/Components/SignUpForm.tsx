import { RegisterApis } from "@/app/apis";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RegisterSchemaType, RegisterSchemas } from "@/lib/types";
import { ErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const loading = useAppSelector((st) => st.auth.loading);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchemas),
  });

  const submit: SubmitHandler<RegisterSchemaType> = async (data) => {
    const initialValue = {
      userId: 0,
      role: "user",
      restaurantId: 0,
    };
    try {
      await dispatch(RegisterApis({ ...data, ...initialValue })).unwrap();
      reset();
    } catch (error) {
      toast.error((error as ErrorResponse).response.data.message);
    }
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
        {errors.emailId && (
          <span className="bg-red-500">{errors.emailId.message}</span>
        )}
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
        {errors.userName && (
          <span className="bg-red-500">{errors.userName.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mobile Number
        </label>
        <input
          type="string"
          {...register("mobileNo")}
          placeholder="Enter Mobile Number"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.mobileNo && (
          <span className="bg-red-500 text-red-500">
            {errors.mobileNo.message}
          </span>
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
          <span className="bg-red-500">{errors.password.message}</span>
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

export default SignUpForm;
