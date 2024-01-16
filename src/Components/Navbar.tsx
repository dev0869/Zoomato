import { useAppSelector } from "@/app/hooks";
import AuthModel from "./AuthModel";
import SearchBar from "./SearchBar";
import { LogoutBtn } from "./LogoutBtn";
const Navbar = () => {
  const user = useAppSelector((st) => st.auth.user);

  return (
    <>
      <nav className="md:max-w-[1100px] py-2 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-[8] items-center gap-4 flex">
            <p className="text-3xl font-[Lemon-Regular] text-dragon">ZOMATO</p>
            <SearchBar />
          </div>

          <div className="flex-[2] justify-center ">
            {user ? (
              <div className="flex gap-4 justify-center items-center">
                <p className="text-xl text-grays"> 👋{user.userName}</p>
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
