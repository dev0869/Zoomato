import { ProductTypeProps } from "@/types";
import React from "react";
import { ProductStore } from "@/features/ProductStore";
import { Link } from "react-router-dom";
const Card = () => {
  const User = JSON.parse(localStorage.getItem("user")!);
  const { MenuItems } = ProductStore();

  return (
    <div className="flex  gap-2 rounded-xl flex-wrap justify-center">
      {(MenuItems as ProductTypeProps[] | null)?.map((ele, id) => {
        const itmNumber = ele.itemID;
        return (
          <React.Fragment key={id}>
            <Link
              state={ele}
              to={`/products/${id}`}
              className="  hover:shadow-md cursor-pointer rounded-xl w-[350px] max-h-[500px] flex flex-col items-center"
            >
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
                        // value={value}
                        className="w-[20%] border-gray-200 border-[1px] rounded-sm px-2"
                        // onChange={(e) =>
                        //   setValue(parseInt(e.target.value, 10) || 0)
                        // }
                      />
                    </>
                  ) : null}
                </div>
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Card;
