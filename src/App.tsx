import { Provider } from 'react-redux';
import { MovieData } from './components/movie/Movie';
import store from './store';

function App() {
  return (
    <Provider store={store}>

      <div className="App">


        <MovieData />


      </div> </Provider>
  );
}

export default App;
