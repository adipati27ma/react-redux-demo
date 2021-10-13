import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
