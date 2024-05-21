import "./App.css";
import Header from "./components/Header";
import BigContainer from "./components/BigContainer";

function App() {
  return (
    <div className="flex items-center flex-col w-screen h-5 p-5">
      <Header />
      <BigContainer />
    </div>
  );
}

export default App;
