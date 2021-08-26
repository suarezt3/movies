import './App.css';
import Cards from './components/Cards/Cards';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import movieList from './components/movieList/movieList';

function App() {
  return (
    <div className="App">
    <Header/>
    <Card/>
    <Cards/>
    </div>
  );
}

export default App;
