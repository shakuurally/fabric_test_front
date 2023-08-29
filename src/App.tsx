import { Provider } from 'react-redux';
import MovieData from './components/Movie';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MovieData />
      </Provider>


    </div>
  );
}

export default App;
