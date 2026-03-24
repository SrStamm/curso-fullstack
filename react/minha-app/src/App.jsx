import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaTecnologias from "./components/ListaTecnologias";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Card corFundo={"red"} />
        <Card corFundo={"green"} />
        <Card corFundo={"blue"} />

        <ListaTecnologias />
      </main>

      <Footer />
    </div>
  );
}

export default App;
