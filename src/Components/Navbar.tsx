import { SearchBar } from ".";
const Navbar = () => {
  return (
    <>
      <nav className="md:max-w-[1100px] py-2 mx-auto">
        <div className="flex justify-between">
          <div>
            <p className="text-3xl font-[Lemon-Regular] text-gray-800">
              ZOMATO
            </p>
          </div>
          <div>
            <SearchBar />
          </div>
          <div>p</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
