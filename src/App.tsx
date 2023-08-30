import { Provider } from 'react-redux';
import { MovieData } from './components/Movie';
import { persistor, store } from './store'; // Change this line
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <MovieData />
        </PersistGate>
      </Provider>

    </div>
  );
}

export default App;
