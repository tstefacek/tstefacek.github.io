import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Introduction from "./components/introduction/Introduction";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
