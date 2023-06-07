import Navbar from "@/components/navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
