import { useState } from "react";
import { ProductStore } from "@/features/ProductStore";
import { useMutation } from "@tanstack/react-query";
import { checkoutApi } from "@/services/api";
import { CheckoutProps } from "@/types";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const { Orders } = ProductStore();
  const [loading, setLoading] = useState(false);
  const { userId, totalAmount, restaurantId } = Orders ?? {};
  const [address, setAddress] = useState("");
  const isFormValid = address;

  const data = {
    userId: userId,
    totalAmount: totalAmount,
    restaurantId: restaurantId,
    deliveryAddress: address,
  };
  const Mutation = useMutation({
    mutationKey: ["Checkout"],
    mutationFn: (data: CheckoutProps) => checkoutApi(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      swal("Thank you for ordering", "Enter to Continue Shopping", "success");
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError: () => {
      toast.error("Something Went wrong");
      setLoading(false);
    },
  });

  const handleCheckOut = () => {
    Mutation.mutate(data);
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-6">
        <hr className="border w-full" />
        <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
          or pay with card
        </p>
        <hr className="border w-full" />
      </div>

      <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
        Enter Address Please
      </label>
      <div className="mt-2 flex-col">
        <div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="string"
            required
            placeholder="Enter Address"
          />
          {!isFormValid && (
            <span className="text-red-500"> Please Enter Address</span>
          )}
        </div>
      </div>
      <p>{Orders?.userId}</p>
      <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
        <div>
          <button
            disabled={!isFormValid}
            className="text-base leading-4"
            onClick={() => handleCheckOut()}
          >
            {loading ? "Loading..." : "Checkout"}
          </button>
        </div>
      </button>
    </>
  );
};

export default Checkout;
