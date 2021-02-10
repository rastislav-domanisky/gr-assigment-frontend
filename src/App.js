import './App.css';
import Header from './components/Header/Header';
import MainArea from './components/MainArea/MainArea';
import Footer from './components/Footer/Footer';
import HorizontalSeparator from './components/HorizontalSeparator/HorizontalSeparator';

function App() {
  return (
    <div className="App">
      <Header />
      <MainArea />
      <HorizontalSeparator />
      <Footer />
    </div>
  );
}

export default App;
