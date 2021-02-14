import './App.css';
import Header from './components/Header/Header';
import MainArea from './components/MainArea/MainArea';
import Footer from './components/Footer/Footer';
import HorizontalSeparator from './components/HorizontalSeparator/HorizontalSeparator';
import AlertDialog from './components/AlertDialog/AlertDialog';

function App() {
  return (
    <div className="App">
      <Header />
      <MainArea />
      <HorizontalSeparator />
      <Footer />
      <AlertDialog />
    </div>
  );
}

export default App;
