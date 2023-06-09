import Footer from "@/Components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default AppLayout;
