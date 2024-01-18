import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Checkout from "@/pages/Checkout/Checkout";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface Authtype {
  type: "Sign Up" | "Log In" | "CheckOut";
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
              {type === "Sign Up"
                ? "Create an Account"
                : type === "Log In"
                ? "Log In"
                : type === "CheckOut"
                ? "Checkout"
                : null}
            </h1>

            {type === "Sign Up" ? (
              <SignUpForm />
            ) : type === "Log In" ? (
              <SignInForm />
            ) : type === "CheckOut" ? (
              <Checkout />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModel;
