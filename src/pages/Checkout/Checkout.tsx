import { checkoutApi } from "@/app/apis";
import { CartItems } from "../cart/Cart";
import { useAppDispatch } from "@/app/hooks";
const Checkout = () => {
  const dispatch = useAppDispatch();
  const data = CartItems.map(
    (ele: { customerId: number; price: number; restaurantID: number }) => {
      return {
        userId: ele.customerId,
        totalAmount: ele.price,
        restaurantId: ele.restaurantID,
        deliveryAddress: "blb",
      };
    }
  );
  console.log(data);
  const postAllCartItems = async () => {
    try {
      const res = await Promise.all(
        data.map((ele: object) => {
          return dispatch(checkoutApi(ele));
        })
      );
      console.log("All requests completed successfully:", res);
    } catch (error) {
      console.error("Error in one or more requests:", error);
    }
  };

  // Call the function to post all cart items
  postAllCartItems();
  return (
    <div>
      <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
        <div>
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
              fill="currentColor"
            />
            <path
              d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <p className="text-base leading-4">Pay</p>
        </div>
      </button>

      <div className="flex flex-row justify-center items-center mt-6">
        <hr className="border w-full" />
        <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
          or pay with card
        </p>
        <hr className="border w-full" />
      </div>

      <div className="mt-8">
        <input
          className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
      </div>

      <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
        Name on card
      </label>
      <div className="mt-2 flex-col">
        <div>
          <input
            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            name=""
            id=""
            placeholder="Name on card"
          />
        </div>
      </div>

      <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
        <div>
          <p className="text-base leading-4" onClick={() => postAllCartItems()}>
            Pay{" "}
          </p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
