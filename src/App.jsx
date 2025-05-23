import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./assets/data/languages";

export default function App() {
  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
}
