import { Navbar } from "../Components";
import { Footer } from "../Components";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:max-w-[1100px] py-4 mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
