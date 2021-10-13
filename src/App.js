import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HookIceCreamContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
