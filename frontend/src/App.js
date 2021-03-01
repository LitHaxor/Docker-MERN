import {BrowserRouter, Route} from 'react-router-dom'
import MovieList from './components/movieList';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage'
import MovieInsert from './pages/MovieInsert';
import MovieUpdate from './pages/MovieUpdate';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route to="/" exact component={Homepage}/>
      <Route to="/movie/create" component={MovieInsert}/>
      <Route to="/movie/list/:id" component={MovieList}/>
      <Route to="/movie/update/:id" component={MovieUpdate}/>
    </BrowserRouter>
  );
}

export default App;
