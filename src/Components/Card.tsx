import { ProductTypeProps } from "@/types";
import React, { useState } from "react";
import { CartApi } from "@/services/api";

import { useMutation } from "@tanstack/react-query";
import { AddCartDetails } from "@/features/CartStore";
import { ProductStore } from "@/features/ProductStore";
const Card = () => {
  const User = JSON.parse(localStorage.getItem("user")!);
  const { MenuItems } = ProductStore();
  // const allproducts = useAppSelector((state) => state.cart.Products);
  // const finalProducts = cartDetails.map((cartItem) => {
  //   const product = MenuItems.find(
  //     (product) => product.itemID === cartItem.itemId
  //   );
  //   return {
  //     ...product,
  //     quantity: cartItem.quantity,
  //     customerId: cartItem.customerId,
  //     itemId: cartItem.itemId,
  //   };
  // });

  // console.log(finalProducts);
  const mutation = useMutation({
    mutationKey: ["addCart"],
    mutationFn: (data) => CartApi(data),
    onSuccess: (data) => {
      AddCartDetails(data);
    },
  });

  // const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(1);
  const addCart = (itmNumber: number) => {
    const CartData = {
      customerId: User?.userId,
      itemId: itmNumber,
      quantity: value,
    };
    mutation.mutate(CartData);
    // dispatch(CartApi(CartData));
  };
  // dispatch(addCarts(finalProducts));

  return (
    <div className="flex  gap-2 rounded-xl flex-wrap justify-center">
      {(MenuItems as ProductTypeProps[] | null)?.map((ele, id) => {
        const itmNumber = ele.itemID;
        return (
          <React.Fragment key={id}>
            <div className="hover:shadow-md cursor-pointer rounded-xl w-[350px] max-h-[500px] flex flex-col items-center">
              <div className=" w-full object-cover flex justify-center ">
                <img
                  src={ele.photoUrl}
                  alt=""
                  className=" max-h-[300px]  rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {ele.menuItemName}
                </h5>
                <div className="">
                  <p className="text-gray-700  mb-4">{ele.description}</p>
                </div>
                <div className="flex justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {ele.price} {ele.restaurantID}
                  </button>
                  {User ? (
                    <>
                      <button onClick={() => addCart(itmNumber)}>sdds</button>
                      <input
                        type="number"
                        value={value}
                        className="w-[20%] border-gray-200 border-[1px] rounded-sm px-2"
                        onChange={(e) =>
                          setValue(parseInt(e.target.value, 10) || 0)
                        }
                      />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Card;
