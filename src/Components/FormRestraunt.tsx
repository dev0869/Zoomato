import { useForm, SubmitHandler } from "react-hook-form";
import {
  RegisterSchemaType,
  RestaurantSchema,
  RestaurantSchemaType,
} from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@/services/api";
import { User } from "./Navbar";
import { toast } from "react-toastify";
const FormRestraunt = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<RestaurantSchemaType>({
    resolver: zodResolver(RestaurantSchema),
  });

  const updateApi = useMutation({
    mutationFn: (data: RegisterSchemaType) => {
      return Product.put("/UpdateUser", data);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data?.data.result === false) {
        toast.error(data?.data.message);
      } else {
        toast.success(data?.data.message);
        queryClient.invalidateQueries({ queryKey: ["login"] });

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    },
  });

  const mutation = useMutation({
    mutationFn: (data: RestaurantSchemaType) => {
      return Product.post("/AddNewRestaurant", data);
    },

    onSuccess: async (data) => {
      try {
        const userdata = {
          ...User,
          restaurantId: data?.data.data.restaurantID,
        };
        console.log(userdata);
        if (data?.data.result === false) {
          toast.error(data?.data.message);
        } else {
          toast.success(data?.data.message);
          console.log(data?.data.data.restaurantID);
          updateApi.mutate(userdata);
        }
      } catch (error) {
        alert(error);
      }
    },
  });

  const registerRest: SubmitHandler<RestaurantSchemaType> = (data) => {
    const initailvalue = {
      restaurantID: 0,
    };
    mutation.mutate({ ...data, ...initailvalue });
  };
  return (
    <form
      className="space-y-4 md:space-y-4"
      onSubmit={handleSubmit(registerRest)}
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Restaurant Name
        </label>
        <input
          type="string"
          {...register("name")}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Restaurant Name"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          cuisineType
        </label>
        <input
          type="string"
          {...register("cuisineType")}
          placeholder="Enter cuisineType like Veg or NonVeg"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.cuisineType && (
          <span className="text-red-500">{errors.cuisineType.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Address
        </label>
        <input
          type="string"
          {...register("address")}
          placeholder="Enter Address"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Contact No
        </label>
        <input
          type="string"
          {...register("contactNo")}
          placeholder="Enter Mobile Number"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.contactNo && (
          <span className="text-red-500">{errors.contactNo.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Opening Hours{" "}
        </label>
        <input
          type="string"
          {...register("openingHours")}
          placeholder="Enter Opening Hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.openingHours && (
          <span className="text-red-500">{errors.openingHours.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-white bg-red-500 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {"Create an restaurant"}
      </button>
    </form>
  );
};
export default FormRestraunt;
