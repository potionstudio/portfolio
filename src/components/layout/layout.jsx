import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
