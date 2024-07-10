import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        <Container>{children}</Container>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
