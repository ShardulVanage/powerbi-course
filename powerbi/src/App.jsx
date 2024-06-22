import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Form from './components/Form';
import Pricing from './components/Pricing';
import Author from './components/Instructor';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Feature/>
      <Author/>
      <Form/>
      <Pricing/>
    
      <Faq/>
    </div>
  );
}

export default App;
