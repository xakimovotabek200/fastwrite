import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Text from "@/components/text/Text";

const AppLayout = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Text />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
