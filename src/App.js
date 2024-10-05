import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
