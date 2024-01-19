import AuthModel from "./AuthModel";
import SearchBar from "./SearchBar";
import { LogoutBtn } from "./LogoutBtn";
import { Link } from "react-router-dom";
export const User = JSON.parse(localStorage.getItem("user")!);
const Navbar = () => {
  return (
    <>
      <nav className="md:max-w-[1100px] py-2 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-[8] items-center gap-4 flex">
            <Link to={"/"}>
              {" "}
              <p className="text-3xl font-[Lemon-Regular] text-dragon">
                ZOMATO
              </p>
            </Link>
            <SearchBar />
          </div>

          <div className="flex-[2] justify-center ">
            {User ? (
              <div className="flex gap-4 justify-center items-center">
                <p className="text-xl text-grays"> 👋{User?.userName}</p>
                <LogoutBtn />
              </div>
            ) : (
              <div className="flex text-xl text-grays mx-auto justify-center gap-4">
                <AuthModel type={"Log In"} />
                <AuthModel type={"Sign Up"} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
