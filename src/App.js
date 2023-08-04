import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Router';

function App() {
  console.log("hi");
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
