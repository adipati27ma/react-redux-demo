import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import HooksIceCreamContainer from './components/HookIceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        {/* <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <ItemContainer item="cake" />
        <ItemContainer item="ice cream" /> */}
      </Provider>
    </div>
  );
}

export default App;
