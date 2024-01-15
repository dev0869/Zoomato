import { MenuItem } from "@/types";
import React from "react";
interface dataprops {
  datas: MenuItem[];
}
const Card = ({ datas }: dataprops) => {
  return (
    <div className="flex  gap-2 rounded-xl flex-wrap justify-center">
      {datas?.map((ele, id) => {
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {ele.price}
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Card;
