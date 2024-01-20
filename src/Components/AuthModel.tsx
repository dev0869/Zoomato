import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Checkout from "@/pages/Checkout/Checkout";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import FormRestraunt from "./FormRestraunt";
import { useLocation } from "react-router-dom";

interface Authtype {
  type: "Sign Up" | "Log In" | "CheckOut" | "Restaurant";
}

const AuthModel = ({ type }: Authtype) => {
  const location = useLocation();
  const isRestaurant = location.pathname === "/partner-with-us";
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <p className="text-xl text-grays">
            {(type === "Log In" || type === "Restaurant") && isRestaurant ? (
              <p className="bg-[#0366D6] text-xl text-nowrap text-white px-6  rounded-md  py-3">
                Register Your Restaurant
              </p>
            ) : (
              <p className="text-nowrap">{type}</p>
            )}

            {type === "CheckOut" ? (
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Make Order
              </button>
            ) : (
              type !== "Log In"
            )}
          </p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="p-2 space-y-1 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {type === "Sign Up"
                ? "Create an Account"
                : type === "Log In"
                ? "Login"
                : type === "CheckOut"
                ? "Checkout"
                : type === "Restaurant"
                ? "Register Restaurant"
                : null}
            </h1>

            {type === "Sign Up" ? (
              <SignUpForm />
            ) : type === "Log In" ? (
              <SignInForm />
            ) : type === "CheckOut" ? (
              <Checkout />
            ) : type === "Restaurant" ? (
              <FormRestraunt />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModel;
