
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css'; // Optional: keep this if there's any specific App-level CSS needed, or remove it. We'll leave it in for safety if we need specific app-wrapper styles, though we can probably make it empty.

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
