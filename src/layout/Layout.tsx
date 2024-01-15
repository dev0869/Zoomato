import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
