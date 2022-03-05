import Header from "./header/header";
import "./App.css";
import "./tailwind.css";
import Main from "./Main/Main";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div
        style={{
          width: "100%",
          border: "1px solid #9C69E2 ",
          // background: "#9C69E2",
          opacity: 0.2,
          boxShadow: "0px -7px 0px rgba(255, 255, 255, 0.19)",
        }}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
