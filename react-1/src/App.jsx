import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />

      <main className="mainInfo">
        <Info />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
