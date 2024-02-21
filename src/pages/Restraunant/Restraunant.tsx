import ChildLayout from "@/layout/ChildLayout";
import "./index.css";
import { User } from "@/components/Navbar";
import AuthModel from "@/components/AuthModel";
const Restraunant = () => {
  return (
    <>
      <div className="background_bar">
        <ChildLayout>
          <div className="mx-[100px] my-[100px]">
            <p className="md:text-4xl  text-white">
              {" "}
              Partner with Zomato 2.0 <br />
              at 0% commission for the ISt month
            </p>
            <p className="mt-[40px] mb-[40px] text-[#A3A2A3] text-xl">
              And get ads worth INR 1500. Valid for new restaurant partners in
              sele
            </p>

            <div className="flex gap-4">
              {!User ? (
                <AuthModel type="Log In" />
              ) : (
                <AuthModel type="Restaurant" />
              )}
              <button className="bg-white text-xl text-black px-6  rounded-md  py-3">
                Login to View Existing Restaurant
              </button>
            </div>
          </div>
        </ChildLayout>
        <p>hiii</p>
      </div>
    </>
  );
};

export default Restraunant;
