import { Provider } from 'react-redux';
import { MovieData } from './components/movie/Movie';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MovieData />
    </Provider>
  );
}

export default App;
